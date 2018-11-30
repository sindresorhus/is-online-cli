import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js');
	t.true(stdout.length > 0);
});

test('should exit with 0 when online', async t => {
	await t.notThrows(execa('./cli.js'));
});

test('should exit with 1 when offline', async t => {
	await t.throws(execa('./cli.js', ['--timeout=0.00001']));
});
