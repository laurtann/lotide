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

const flatten = function(array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (j = 0; j < array[i].length; j++) {
        flatArray.push(array[i][j]);
      }
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
};

//tests
// console.log(flatten([1, "EHHH", [3, 4, 9], 5, [6]]));
// assertArraysEqual(flatten([1, "EHHH", [3, 4, 9], 5, [6]]), [ 1, 'EHHH', 3, 4, 9, 5, 6 ]) // => PASS
