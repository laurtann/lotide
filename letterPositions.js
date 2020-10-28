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

const letterPositions = function(sentenceString) {
  const resultObj = {};
  const sentence = sentenceString.toLowerCase();

  for (const letter of sentence) {
    if (letter !== " " && letter !== "!" && letter !== "." && letter !== "?" && isNaN(letter)) {
      resultObj[letter] = [];
    }
  }

  for (let i = 0; i < sentenceString.length; i++) {
    for (const key in resultObj) {
      if (sentenceString[i] === key) {
        resultObj[key].push(i);
      }
    }
  }
  return resultObj;
};

//tests
//test result obj { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }
console.log(assertArraysEqual(letterPositions("hello").e, [1])); // => T
console.log(assertArraysEqual(letterPositions("hello").l, [2, 3])); // => T
console.log(assertArraysEqual(letterPositions("hello").l, [2])); // => F