import test from 'ava';
import execa from 'execa';

test(async t => {
	const {stdout} = await execa('./cli.js');
	t.true(stdout.length > 0);
});

test('should exit with 0 when online', t => {
	t.notThrows(execa('./cli.js'));
});

test('should exit with 1 when offline', t => {
	t.throws(execa('./cli.js', ['--timeout=1']));
});
