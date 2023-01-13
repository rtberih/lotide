const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (let key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const eqArrays = function(array1, array2) {
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const shortSleeveMultiColorShirtObject = {
  color: "multi",
  size: "small",
  sleeves: "short",
};
const longSleeveMultiColorShirtObject = {
  color: "multi",
  size: "small",
  sleeves: "long",
};
const shortSleeveRedShirtObject = {
  color: "red",
  size: "medium",
  sleeves: "short",
};

assertObjectsEqual(shortSleeveMultiColorShirtObject, longSleeveMultiColorShirtObject);
assertObjectsEqual(shortSleeveMultiColorShirtObject, shortSleeveMultiColorShirtObject);
assertObjectsEqual(shortSleeveMultiColorShirtObject, shortSleeveRedShirtObject);
