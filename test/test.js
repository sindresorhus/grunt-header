import fs from 'fs';
import path from 'path';
import test from 'ava';

test(t => {
	t.regex(fs.readFileSync(path.join(__dirname, 'tmp/fixture'), 'utf8'), /^bar\n/);
});
