#ah-passport-plugin

##Status
**THIS PLUGIN IS IN DEVELOPMENT AND IS INCOMPLETE - DO NOT USE!**

##Version
Master: v0.0.1
[![Travis CI build status icon](https://api.travis-ci.org/neilstuartcraig/ah-passport-plugin.svg)](https://travis-ci.org/neilstuartcraig/ah-passport-plugin) 
[![Code Climate](https://codeclimate.com/github/neilstuartcraig/ah-passport-plugin/badges/gpa.svg)](https://codeclimate.com/github/neilstuartcraig/ah-passport-plugin)
[![Coverage Status](https://coveralls.io/repos/neilstuartcraig/ah-passport-plugin/badge.png?branch=master)](https://coveralls.io/r/neilstuartcraig/ah-passport-plugin) 
[![Dependency Status](https://gemnasium.com/neilstuartcraig/ah-passport-plugin.svg)](https://gemnasium.com/neilstuartcraig/ah-passport-plugin)  

##Semver
This project aims to maintain the [semver](http://semver.org/) version numbering scheme.

##Changelog
See the [changelog](./changelog.md) file

##Overview
`ah-passport-plugin` is a plugin for the [actionhero](http://actionherojs.com) API framework/system which allows usage of [passport](http://passportjs.org/) authentication middleware in actionhero projects.

##Features


##Requirements  

###Production requirements


###Development/test requirements


##Installation


```shell
# Install actionhero (skip this if you have already got it installed)
npm install ah-passport-plugin

```



##Usage


##Configuration


##Public methods

###General principals
All public methods conform to the below principals:

* They are asynchronous and thus receive a callback function as the last argument
* They will filter all user input and output based on youre configured options in `userObjectProperties`
* They will (in async mode) return two values, error and result, where:
    * error is a string, object or array if an error occurred, null otherwise
    * result is a string, object, array, number etc. on success, null otherwise
* They will never throw errors, instead they will return accordingly
* All arguments are required


###functionName(arg1, arg2, callback)
overview

####Arguments
#####arg1 (type)
Info

#####arg2 (type)
Info

#####callback (function)
The callback function to execute on completion, this will receive the two standard callback arguments, `error` and `result`.

####Returns (callback arguments)
* error - a string, object or array if an error occurred, null otherwise
* result - 



##To do/roadmap


##Tests
[Tests](./test) currently run in a raw mode (simply running scripts which use `process.exit()` and the relevant exit code) and are run via [Travis CI](https://travis-ci.org/). 

##License
ah-passport-plugin is issued under a [Creative Commons attribution share-alike license](http://creativecommons.org/licenses/by-sa/4.0/deed.en_GB).
This means you can share and adapt the code provided you attribute the original author(s) and you share your resulting source code. If, for some specific reason you need to use this library under a different license then please contact me and i'll see what I can do - though I should mention that I am committed to all my code being open-source so closed licenses will almost certainly not be possible.
