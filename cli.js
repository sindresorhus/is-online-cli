#!/usr/bin/env node
import process from 'node:process';
import logSymbols from 'log-symbols';
import meow from 'meow';
import isOnline from 'is-online';

const cli = meow(`
	Usage
	  $ is-online

	Options
	  --timeout  Seconds to wait for a server to respond (Default: 5)

	Example
	  $ is-online
	  ${logSymbols.success} Online

	Exit code 0 if online and 1 if offline.
`, {
	importMeta: import.meta,
	flags: {
		timeout: {
			type: 'number',
			default: 5,
		},
	},
});

const online = await isOnline({
	timeout: cli.flags.timeout * 1000,
});

console.log(online ? `${logSymbols.success} Online` : `${logSymbols.error} Offline`);
process.exit(online ? 0 : 1);
