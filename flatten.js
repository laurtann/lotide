const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flatArray.push(array[i][j]);
      }
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
};

module.exports = flatten;

//tests
console.log(flatten([1, "EHHH", [3, 4, 9], 5, [6]]));
assertArraysEqual(flatten([1, "EHHH", [3, 4, 9], 5, [6]]), [ 1, 'EHHH', 3, 4, 9, 5, 6 ]); // => PASS
