#ah-passport-plugin

##Status
**This plugin is a draft - please test it but it is not advisable for production usage (yet)**

##Version
Master: v0.0.3
[![Travis CI build status icon](https://api.travis-ci.org/neilstuartcraig/ah-passport-plugin.svg)](https://travis-ci.org/neilstuartcraig/ah-passport-plugin) 
[![Code Climate](https://codeclimate.com/github/neilstuartcraig/ah-passport-plugin/badges/gpa.svg)](https://codeclimate.com/github/neilstuartcraig/ah-passport-plugin)
[![Coverage Status](https://coveralls.io/repos/neilstuartcraig/ah-passport-plugin/badge.png?branch=master)](https://coveralls.io/r/neilstuartcraig/ah-passport-plugin) 
[![Dependency Status](https://gemnasium.com/neilstuartcraig/ah-passport-plugin.svg)](https://gemnasium.com/neilstuartcraig/ah-passport-plugin)  

##Semver
This project aims to maintain the [semver](http://semver.org/) version numbering scheme.

##Changelog
See the [changelog](./changelog.md) file

##Overview
`ah-passport-plugin` is a plugin for the [actionhero](http://actionherojs.com) API framework/system which allows usage of [passport](http://passportjs.org/) authentication middleware in actionhero projects. There are a large number of [passport strategies](http://passportjs.org/guide/providers/) available which provide authentication backends for various websites/social networks/backends etc. - for example, Github, Twitter, Facebook, Google, Youtube...

##Challenges
Passport does not impose strict constraints over strategy implementations - this unfortunately means that this plugin cannnot abstract strategies into simple key/value configuration parameters. This is most likely due in the main to the lack of consistency in authentication services/backends, thus this is not in any way a criticism of passport, merely a statement of fact to explain the implementation of this plugin.

##Requirements/dependencies
###Production requirements
* [passport](http://passportjs.org) - the core passport module which this plugin lightly wraps/implements for actionhero specifics

###Development/test requirements/dependencies
I use some requirements/dependencies for testing etc. which are:

* [mocha](https://github.com/mochajs/mocha)  
* [should](https://github.com/shouldjs/should.js)
* [coveralls](https://github.com/cainus/node-coveralls)
* [mocha-lcov-reporter](https://github.com/StevenLooman/mocha-lcov-reporter)
* [istanbul](https://github.com/gotwarlost/istanbul)

###Peer dependencies
* [actionhero](http://www.actionherojs.com/) - the framework for which this is a plugin

Note: You can avoid installing these by running `npm install ah-passport-plugin --production` if you wish. 

##Installation
The simplest installation method is via `npm` as per below:

```shell
# Install actionhero (skip this if you have already got it installed)
npm install ah-passport-plugin
```

##Usage
To use `ah-passport-plugin` you will need to install it (as per above or via your `package.json` file, in the `dependencies` object) into your actionhero project. You'll also need to install (ideally via your `package.json` file, in `dependencies`) the strategies you want to use - this plugin cannot easily do that for you (yet).

##Configuration
You will need to add the strategies you want to use in the [config file](./config/ah-passport-plugin-config.js) file (which will be copied into your actionhero project: `/config/plugins/ah-passport-plugin-config.js`) and you'll also need to provide the actions you require (e.g. `authenticate`, `callback` (for oAuth/2 style logins at least), `failed`, `logout` etc.) - these will be specific to your requirements and strategies but you can see some examples which should allow for simple modification in [actions](./actions)

##To do/roadmap
* Test with web-facing installation to verify:
    * Logins/auth properly
    * Sessions
* Test functionality and add default config/actions for several stragies - at least:
    * Github
    * Twitter
    * Facebook
    * Google
    * Youtube
    * Instagram
    * Weibo
    * ...?
* Add some tests (using the above actions/config)
* Test/fix for 2FA/MFA 
* Ideally, add some 'local' auth mechanisms - perhaps [ah-tdp-auth-plugin](https://github.com/neilstuartcraig/TDPAHAuthPlugin) and any others which are sensible
* Audit security
* Optimise performance as far as possible

##Tests
[Tests](./test) use mocha and the actiohero test facilties and are run via [Travis CI](https://travis-ci.org/). 

##License
ah-passport-plugin is issued under a [Creative Commons attribution share-alike license](http://creativecommons.org/licenses/by-sa/4.0/deed.en_GB).
This means you can share and adapt the code provided you attribute the original author(s) and you share your resulting source code. If, for some specific reason you need to use this library under a different license then please contact me and i'll see what I can do - though I should mention that I am committed to all my code being open-source so closed licenses will almost certainly not be possible.
