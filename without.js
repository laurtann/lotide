const eqArrays = function(array1, array2) {
  let equalFlag;
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      equalFlag = true;
    } else {
      return false;
    }
  } return equalFlag;
};

const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`🐵🐵🐵 Array Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🙈🙈🙈 Array Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};

const without = function(source, itemsToRemove) {
  let resultArr = source.filter(function(item) {
    return !itemsToRemove.includes(item);
  });
  return resultArr;
};

// // Tests
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => true
// assertArraysEqual(without(["1", "2", "3"], ["3"]), ["1", "2"]); // => true
// assertArraysEqual(without(["1", "2", "3"], ["2", "3"]), [1]); // => false
// assertArraysEqual(without(["a", "1", 6], ["a", 6]), ["1"]); // => true
// assertArraysEqual(without(["1", "a", 3], ["a", "3"]), ["1"]); // => false



