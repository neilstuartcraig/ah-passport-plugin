/*jslint node: true */
"use strict";

exports.default=
{
	AHPassportPlugin: function(api)
	{
	    return {

			strategies:
			{
				"one":
				{
					userIDGetter:function(){return "a user ID"},
					passwordGetter:function(){return "a user ID"},
					authFunction:function(){return "blah"},
					verifyCallbackFunction:function(){return "bluh"},
					scope:["email","profile"]
				},
				"two":
				{
					userIDGetter:function(){return "a user ID 2"},
					passwordGetter:function(){return "a user ID 2"},
					authFunction:function(){return "blah 2"},
					verifyCallbackFunction:function(){return "bluh2"},
					scope:["email2","profile2"]
				}
			}

			
		}
	}
};

exports.production=
{
	AHPassportPlugin: function(api)
	{
	    return {
			
	    }
	}
};

exports.uat=
{
	AHPassportPlugin: function(api)
	{
	    return {
			
	    }
	}
};

exports.development=
{
	AHPassportPlugin: function(api)
	{
	    return {
			
	    }
	}
};



