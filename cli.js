#!/usr/bin/env node
'use strict';
const logSymbols = require('log-symbols');
const meow = require('meow');
const isOnline = require('is-online');

const cli = meow(`
	Usage
	  $ is-online

	Options
	  --timeout  Milliseconds to wait for a server to respond (Default: 5000)

	Example
	  $ is-online
	  ${logSymbols.success} Online
`);

isOnline(cli.flags).then(online => {
	console.log(online ? `${logSymbols.success} Online` : `${logSymbols.error} Offline`);
	process.exit(online ? 0 : 1);
});
