const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let key of obj1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof object1[key] === "object" && typeof object2[key] === "object") {
      eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;



// tests

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true
// assertEqual(eqObjects(cd, dc), true);


// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
// assertEqual(eqObjects(cd, cd2), false);

// day 5 tests with recursion

// const case1 = { a: { z: 1 }, b: 2 };
// const case2 = { a: { z: 1 }, b: 2 };
// console.log(eqObjects(case1, case2)); //==> true
// assertEqual(eqObjects(case1, case2), true);

// const num1 = { a: { y: 0, z: 1 }, b: 2 };
// const num2 =  { a: { z: 1 }, b: 2 } ;
// eqObjects(num1, num2); // => false
// assertEqual(eqObjects(num1, num2), false);

// const like1 = { likes: { drinks: "pop" }, snacks: "chips" };
// const like2 = { likes: { drinks: "pop" }, snacks: "chips" };
// eqObjects(like1, like2) // => true
// assertEqual(eqObjects(like1, like1), true);

// const fruit1 = { fruits: { mangos: 6, bananas: 9 }, water: "sparkling" };
// const fruit2 =  { fruits: { mangos: 6 }, bananas: 9, water: "sparking" };
// eqObjects(fruit1, fruit2) // => false
// assertEqual(eqObjects(fruit1, fruit2), false);


