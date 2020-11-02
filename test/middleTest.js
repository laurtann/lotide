const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test Code
assertArraysEqual(middle([1]), []); // => T
assertArraysEqual(middle([1, 2]), []); // => T
assertArraysEqual(middle([1, 2]), [1]); // => F
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => T
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => T