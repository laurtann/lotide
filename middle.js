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

const middle = function(array) {
  let middleItemArray = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      middleItemArray.push(array[(array.length / 2) - 1], array[array.length / 2]);
    } else {
      middleItemArray.push(array[Math.floor(array.length / 2)]);
    }
  }
  return middleItemArray;
}

// Test Code
// assertArraysEqual(middle([1]), []); // => T
// assertArraysEqual(middle([1, 2]), []); // => T
// assertArraysEqual(middle([1, 2]), [1]); // => F
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => T
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => T

