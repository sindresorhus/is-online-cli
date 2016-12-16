#!/usr/bin/env node
'use strict';
const logSymbols = require('log-symbols');
const meow = require('meow');
const isOnline = require('is-online');

meow(`
	Example
	  $ is-online
	  ${logSymbols.success} Online
`);

isOnline().then(online => {
	console.log(online ? `${logSymbols.success} Online` : `${logSymbols.error} Offline`);
	process.exit(online ? 0 : 1);
});
