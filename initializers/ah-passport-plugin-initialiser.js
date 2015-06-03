/*jslint node: true */
"use strict";

module.exports=
{
	initialize: function(api, next)
	{
		api.log("ah-passport-plugin initialiser: Started...", "debug");

		// Mediocre test, this needs improvement
		if(typeof(api.config.AHPassportPlugin)==="object")
		{
			api.log("ah-passport-plugin initialiser: Found config object!", "debug");

			// Reference: https://gist.github.com/joshbirk/1732068

			// Set up the passport main object
			api.AHPassportPlugin=require("passport");
			api.log("ah-passport-plugin initialiser: passport 'require' done", "debug");

			var s;
			for(s in api.config.AHPassportPlugin.strategies)
			{
				api.log("ah-passport-plugin initialiser: Adding passport strategy %s", "debug", s);

				// Create a local, convenience var for the passport strategy config
				var conf=api.config.AHPassportPlugin.strategies[s];

				// Require the passport plugin for this strategy...
				var R=require(conf.pluginNPMModuleName);
				api.log("ah-passport-plugin initialiser: passport strategy 'require' for %s done", "debug", s);

				// ...and if it has a subobject we should use (typically, but annoyingly not mandatorily, "Strategy")
				if(conf.pluginSubObjectName)
				{
					R=R[conf.pluginSubObjectName];
					api.log("ah-passport-plugin initialiser: passport strategy sub-object name is %s", "debug", conf.pluginSubObjectName);
				}

				// Pull out the config and verification functions for this strategy
				var c=conf.strategyConfig || {};
				var v=conf.StrategyVerifyFunction || {};

				api.AHPassportPlugin.use(new R(c,v));
			}

		// Adapted from https://groups.google.com/forum/#!msg/actionhero-js/1OQiN_7Gpmw/jVLwKD2F_1MJ
			var AHPassportPluginMiddleware=function(data, next)
			{
				api.AHPassportPlugin.initialize()(data.connection.rawConnection.req, data.connection.rawConnection.res, function ()
				{
					api.AHPassportPlugin.session()(data.connection.rawConnection.req, data.connection.rawConnection.res, function ()
					{
						return next();
					});
				});
			};

			var middleware=
			{
				name: 'passport plugin',
				global: true,
				priority: 10,
				preProcessor: AHPassportPluginMiddleware
			};

			api.actions.addMiddleware(middleware);

			api.log("ah-passport-plugin initialiser: Adding preProcessor to run authentication middleware", "debug");
		}
	
		api.log("ah-passport-plugin initialiser: Done!", "debug");

		return next();
	},
	start: function(api, next)
	{
		return next();
	},
	stop: function(api, next)
	{
		return next();
	}
};