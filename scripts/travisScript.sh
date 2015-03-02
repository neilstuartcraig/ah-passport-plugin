#!/bin/bash

# Essentially, if actionhero hasn't been generated yet (and thus cannot have been installed yet either)
echo "Running travis postinstall script which will install actionhero, generate and copy the ah-passport-plugin config file to the actionhero config/plugins directory";

if [ ! -d "./config/plugins" ]
	then
		echo "Condition met, running";

		# Install NPM modules
		npm install;

		# Generate actionhero project skeleton
		./node_modules/.bin/actionhero generate;

		# Create (AH) config/plugins dir
		mkdir -p "./config/plugins";

		# Move the existing config file to the plugins dir created above
		cp ./config/ah-passport-plugin-config.js ./config/plugins/ah-passport-plugin-config.js;
fi