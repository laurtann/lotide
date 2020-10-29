const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💁💁💁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅‍♀️🙅‍♀️🙅‍♀️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let equalFlag;

  if (array1.length === 0 && array2.length === 0) {
    return true;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      equalFlag = true;
    } else {
      return false;
    }
  } 
  return equalFlag;
};

//tests
// assertEqual(eqArrays(["2", 3, 4], ["2", 3]), false); // => PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([], []), true); // => should PASS
// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false