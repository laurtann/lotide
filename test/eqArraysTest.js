const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//tests
assertEqual(eqArrays(["2", 3, 4], ["2", 3]), false); // => PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([], []), true); // => should PASS
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays(["1", [[[["2"]]]], "3"], ["1", [[[["2"]]]], "3"]), true);