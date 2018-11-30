#!/usr/bin/env node
'use strict';
const logSymbols = require('log-symbols');
const meow = require('meow');
const isOnline = require('is-online');

const cli = meow(`
	Usage
	  $ is-online

	Options
	  --timeout  Seconds to wait for a server to respond (Default: 5)

	Example
	  $ is-online
	  ${logSymbols.success} Online
`, {
	flags: {
		timeout: {
			type: 'number',
			default: 5
		}
	}
});

(async () => {
	const online = await isOnline({
		timeout: cli.flags.timeout * 1000
	});

	console.log(online ? `${logSymbols.success} Online` : `${logSymbols.error} Offline`);
	process.exit(online ? 0 : 1);
})();

