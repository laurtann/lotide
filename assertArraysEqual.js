const eqArrays = function(array1, array2) {
  if (array1.length === 0 && array2.length === 0) {
    return true;
  }

  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🐵🐵🐵 Array Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🙈🙈🙈 Array Assertion Failed: ${array1} !== ${array2}`);
  }
};

//tests
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => T
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => Pass
// assertArraysEqual([], []) // => Pass
// assertArraysEqual(["1", 2, "3"], ["1", "2", "3"]) // => Fail
