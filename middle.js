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


const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`🐵🐵🐵 Array Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🙈🙈🙈 Array Assertion Failed: ${arrayA} !== ${arrayB}`);
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

