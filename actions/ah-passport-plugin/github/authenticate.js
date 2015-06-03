/*jslint node: true */
"use strict";

exports.authenticate=
{
  name: "ah-passport-plugin/github/authenticate",
  description: "Just a simple demo github login action",
  
  run:function(api, data, next)
  {

	api.log("ah-passport-plugin: Github authenticate action running", "debug");

	api.AHPassportPlugin.authenticate("github", {session: api.config.AHPassportPlugin.strategies.github.useBuiltinSessions}, function (err, user, info)
	{
		if(err)
		{
			api.log("ah-passport-plugin: Github authenticate action error %s", "debug", err);
			data.connection.error=err;
			return next(err);
		}
		else if(typeof(user)!=="object")
		{
			var userErr="ah-passport-plugin: Github authenticate action - Error: 'user' is not an object";
			api.log(userErr, "debug");
			data.connection.rawConnection.responseHttpCode=401; // Unauthorized
			return next(userErr);
		}

		// This may well need amending
		user.uid=data.connection.id;

		data.connection.rawConnection.req.logIn(user, function ()
		{
			api.log("ah-passport-plugin: Github authenticate action - login done!", "debug");
			return next();
		});
	})(data.connection.rawConnection.req, data.connection.rawConnection.res);
  }
};