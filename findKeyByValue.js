const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💁💁💁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅‍♀️🙅‍♀️🙅‍♀️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(objectToScan, valueToScanFor) {
  // scan object and return the first key which contains the given value
  const objEntries = Object.entries(objectToScan);
  for (const entry of objEntries) {
    if (entry[1] === valueToScanFor) {
      return entry[0];
    }
  }
};

// tests
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// const bestTVShowsByGenre2 = {
//   sci_fi: "The Wire",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // => T
// assertEqual(findKeyByValue(bestTVShowsByGenre2, "The Wire"), "drama"); // => F
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // => T