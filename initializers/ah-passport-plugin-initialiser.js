/*jslint node: true */
"use strict";

module.exports=
{
	initialize: function(api, next)
	{
		api.log("ah-passport-plugin initialiser: Started...", "debug");


		// decision 1
		// need to decide whether or not to allow >1 auth strategy
			// Y: set up e.g. api.passport["strategy-1"], api.passport["strategy-2"] etc.
			// N: set up e.g. api.passport

console.dir(api.config.AHPassportPlugin);
	

		api.log("ah-passport-plugin initialiser: Done!", "debug");

		next();
	},
	start: function(api, next)
	{
		next();
	},
	stop: function(api, next)
	{
		next();
	}
};