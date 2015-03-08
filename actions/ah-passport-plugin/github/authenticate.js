exports.authenticate=
{
  name: "ah-passport-plugin/github/authenticate",
  description: "Just a simple demo github login action",
  
  run:function(api, connection, next)
  {

	api.log("ah-passport-plugin: Github authenticate action running", "debug");
  	
	api.AHPassportPlugin.authenticate("github", {session: api.config.AHPassportPlugin.strategies.github.useBuiltinSessions}, function (err, user, info)
	{
		if(err)
		{
			api.log("ah-passport-plugin: Github authenticate action error %s", "debug", err);
			connection.error=err;
			return next(connection, false);
		}
		else if(typeof(user)!=="object")
		{
			api.log("ah-passport-plugin: Github authenticate action - Error: 'user' is not an object", "debug");
			connection.rawConnection.responseHttpCode=401; // Unauthorized
			return next(connection, false);
		}

		// This may well need amending
		user.uid=connection.id;

		connection.rawConnection.req.logIn(user, function ()
		{
			api.log("ah-passport-plugin: Github authenticate action - login done!", "debug");
			return next(connection, true);
		});
	})(connection.rawConnection.req, connection.rawConnection.res);
  }
};