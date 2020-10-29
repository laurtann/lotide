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
assertArraysEqual(letterPositions("hello").e, [1]); // => T
assertArraysEqual(letterPositions("hello").l, [2, 3]); // => T
assertArraysEqual(letterPositions("hello").l, [2]); // => F