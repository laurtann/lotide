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

const without = function(source, itemsToRemove) {
  const resultArr = source.filter(function(sourceItem) {
    return !itemsToRemove.includes(sourceItem);
  });
  return resultArr;
};

// // Tests
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => true
// assertArraysEqual(without(["1", "2", "3"], ["3"]), ["1", "2"]); // => true
// assertArraysEqual(without(["1", "2", "3"], ["2", "3"]), [1]); // => false
// assertArraysEqual(without(["a", "1", 6], ["a", 6]), ["1"]); // => true
// assertArraysEqual(without(["1", "a", 3], ["a", "3"]), ["1"]); // => false



