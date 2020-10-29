const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💁💁💁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅‍♀️🙅‍♀️🙅‍♀️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  const objEntries = Object.entries(object);
  for (const entry of objEntries) {
    if (callback(entry[1])) {
      return entry[0];
    }
  }
};

// tests
// let result1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2); // => "noma"

// assertEqual(result1, "noma"); // => PASS

// let result2 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 0); // => undefined

// assertEqual(result2, undefined); // => PASS

// let result3 = findKey({
//   "Scully": { fearLevel: 0, redHair: 100, alienAbductions: 1},
//   "Mulder": { fearLevel: 15, redHair: 0, alienAbductions: 1, deadFamilyMembers: 2},
//   "Alien" : { fearLevel: 3, redHair: 0, alienAbductions: 1}
// }, x => x.alienAbductions === 1);

// assertEqual(result3, "Scully"); // => PASS
// assertEqual(result3, "Mulder"); // => FAIL