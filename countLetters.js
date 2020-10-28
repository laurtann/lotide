const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💁💁💁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅‍♀️🙅‍♀️🙅‍♀️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentenceString) {
  const resultObj = {};
  const sentence = sentenceString.toLowerCase();

  for (const letter of sentence) {
    if (letter !== " " && letter !== "!" && letter !== "." && letter !== "?" && isNaN(letter)) {
      if (resultObj[letter]) {
        resultObj[letter] += 1;
      } else {
        resultObj[letter] = 1;
      }
    }
  }
  return resultObj;
};

// Test
// Test Obj Expected { o: 2, n: 1, e: 3, t: 4, w: 1, h: 1, r: 1 }
const result2 = countLetters('oneTTT w7othree');
console.log(assertEqual(result2["o"], 2)); // ==> T
console.log(assertEqual(result2["7"], 1)); // ==> F
console.log(assertEqual(result2["7"], undefined)); // ==> T
