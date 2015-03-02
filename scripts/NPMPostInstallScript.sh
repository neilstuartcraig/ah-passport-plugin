#!/bin/bash

# This script is solely for NPM installs, to be run after the initial "npm install"
# it is not used for travis tests, see travisScript.sh for that

P=`pwd`;
echo "Running NPM postinstall script from "$P;

# We'll wrap this in a condition so it can't fail - e.g. on travis
if [ -d "../../config/" ]
	then 
		# Create (AH) config/plugins dir if it doesn't exist
		mkdir -p "../../config/plugins";

		# copy this plugins local default config file to AH plugins config dir
		cp ./config/ah-passport-plugin-config.js ../../config/plugins/ah-passport-plugin-config.js;
fi