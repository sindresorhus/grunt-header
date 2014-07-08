'use strict';
var fs = require('fs');
var test = require('ava');

test('adds header', function (t) {
	t.assert(/^bar/.test(fs.readFileSync(__dirname + '/tmp/fixture', 'utf8')));
});
