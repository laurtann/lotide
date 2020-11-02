const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


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

module.exports = letterPositions;

// //tests
// //test result obj { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }
// assertArraysEqual(letterPositions("hello").e, [1]); // => T
// assertArraysEqual(letterPositions("hello").l, [2, 3]); // => T
// assertArraysEqual(letterPositions("hello").l, [2]); // => F