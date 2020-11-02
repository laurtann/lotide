const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  const resultArr = source.filter(function(sourceItem) {
    return !itemsToRemove.includes(sourceItem);
  });
  return resultArr;
};

module.exports = without;

// // Tests
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => true
// assertArraysEqual(without(["1", "2", "3"], ["3"]), ["1", "2"]); // => true
// assertArraysEqual(without(["1", "2", "3"], ["2", "3"]), [1]); // => false
// assertArraysEqual(without(["a", "1", 6], ["a", 6]), ["1"]); // => true
// assertArraysEqual(without(["1", "a", 3], ["a", "3"]), ["1"]); // => false

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]); // => T



