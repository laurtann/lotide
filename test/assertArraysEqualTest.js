const assertArraysEqual = require('../assertArraysEqual');


//tests
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => Pass
assertArraysEqual([], []); // => Pass
assertArraysEqual(["1", 2, "3"], ["1", "2", "3"]); // => Fail