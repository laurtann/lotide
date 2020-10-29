const eqArrays = function(array1, array2) {
  let equalFlag;

  if (array1.length === 0 && array2.length === 0) {
    return true;
  }

  if (array1.length !== array2.length) {
    return false;
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

const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  let flag;
  for (let key of obj1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        flag = true;
      } else {
        return false;
      }
    } else if (object1[key] === object2[key]) {
      flag = true;
    } else {
      return false;
    }
  }
  return flag;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🐵🐵🐵 Objects Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🙈🙈🙈 Objects Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);