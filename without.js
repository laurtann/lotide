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

const without = function(source, itemsToRemove) {
  const resultArr = source.filter(function(sourceItem) {
    return !itemsToRemove.includes(sourceItem);
  });
  return resultArr;
};

// Tests
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



