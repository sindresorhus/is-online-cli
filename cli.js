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
	if (online) {
		process.stdout.write(`${logSymbols.success} Online\n`);
	} else {
		process.stderr.write(`${logSymbols.error} Offline\n`);
	}
	process.exit(online ? 0 : 1);
});
