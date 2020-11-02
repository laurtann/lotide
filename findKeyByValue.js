const assertEqual = require('./assertEqual');

const findKeyByValue = function(objectToScan, valueToScanFor) {
  for (const entry in objectToScan) {
    if (objectToScan[entry] === valueToScanFor) {
      return entry;
    }
  }
};

module.exports = findKeyByValue;

// // tests
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