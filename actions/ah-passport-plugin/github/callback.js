/*jslint node: true */
"use strict";

exports.authenticate=
{
  name: "ah-passport-plugin/github/callback",
  description: "Just a simple demo github login - callback action",
  
  run:function(api, data, next)
  {
    api.log("ah-passport-plugin: Github callback action running", "debug");

    api.AHPassportPlugin.authenticate('github', { failureRedirect: '/api/ah-passport-plugin/github/authenticate' }),

	// This may not be helpful/sensible
	data.response.result="Authenticated!";

    return next();
  }
};