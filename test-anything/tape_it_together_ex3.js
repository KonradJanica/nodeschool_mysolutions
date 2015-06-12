var test = require('tape');

var fancify = require(process.argv[2]);

test('fancify', function (t) {
  t.equal(fancify('Hello'), '~*~Hello~*~', 'make fancy wrapping');
  t.equal(fancify('Hello', true), '~*~HELLO~*~', 'make fancy with caps');
  t.equal(fancify('Hello', false, '!'), '~!~Hello~!~', 'use different symbol');
  t.end();
});
