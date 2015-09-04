
var sqrt = require('./sqrt');
var tests = [99.6, 100, 144, 99.78, 0.58, 100000000];
var i;

for (i = 0; i < tests.length; i++) {
  console.log('Square route of %s is %s', tests[i], sqrt(tests[i]));
}
