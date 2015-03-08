/*jslint node: true */
"use strict";

exports["default"]=
{
	AHPassportPlugin: function(api)
	{
		return {

			_toExpand:false, 
			strategies:
			{
				"github":
				{
					pluginNPMModuleName:"passport-github",
					pluginSubObjectName:"Strategy",
					strategyConfig:
					{
						clientID: "your-github-client-id",
						clientSecret: "your-github-client-secret",
						scope:["public_repo"],
						callbackURL: "https://your.callback.url"
					},
					StrategyVerifyFunction:function verifyFn(accessToken, refreshToken, profile, done)
					{
						var err=null;
						var user=profile; 

					// TODO: Tidy this if poss
						if(typeof(done)==="function")
						{
							return done(err, user);
						}
						else
						{
							return false;
						}
					},

					// TODO: Decide if it's worthwhile having this param
					useBuiltinSessions:true
				}
			},
			serialiseUser:function(user, done)
			{
				if(typeof(done)==="function")
				{
					return done(null, user);
				}
				else
				{
					return false;
				}
			},
			deserialiseUser:function(obj, done)
			{
				if(typeof(done)==="function")
				{
					return done(null, obj);
				}
				else
				{
					return false;
				}
			}
		};
	}
};

exports.production=
{
	AHPassportPlugin: function(api)
	{
		return {
			
		};
	}
};

exports.uat=
{
	AHPassportPlugin: function(api)
	{
		return {
			
		};
	}
};

exports.development=
{
	AHPassportPlugin: function(api)
	{
		return {
			
		};
	}
};



