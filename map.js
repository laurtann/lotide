const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// // tests

// // return first char of each word
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);
// assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // => T

// // test if each element is string
// const elements = ["hi", 87, "howdy", "uhhuh", "87"];
// const results2 = map(elements, element => typeof element === "string");
// console.log(results2);
// assertArraysEqual(results2, [ true, false, true, true, true ]); // => T

// // multiply array values by 4
// const values = [3, 65, 79, 99, 55];
// const results3 = map(values, value => value * 4);
// console.log(results3);
// assertArraysEqual(results3, [ 12, 260, 316, 396, 220 ]); // => T
