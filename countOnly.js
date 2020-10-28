// assertEqual can only compare primitive value types
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💁💁💁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅‍♀️🙅‍♀️🙅‍♀️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//count only will be given an array(allItems) and obj (itemsToCount)
// will return obj with counts of everything input obj listed (if truthy!)

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

// Test cases
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);