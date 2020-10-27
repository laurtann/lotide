const eqArrays = function(array1, array2) {
  let equalFlag;
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      equalFlag = true;
    } else {
      equalFlag = false;
    }
  } return equalFlag;
};


const assertEqualArrays = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`🐵🐵🐵 Array Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🙈🙈🙈 Array Assertion Failed: ${arrayA} !== ${arrayB}`)
  }
}

console.log(assertEqualArrays(["1", "2", "3"], ["1", "2", "3"]));
