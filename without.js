const eqArrays = function (actualArrary, expectedArray) {
  if (actualArrary.length !== expectedArray.length) {
      return false;
  }
  for (let i = 0; i < actualArrary.length; i++) {
      if (actualArrary[i] !== expectedArray[i]) {
          return false;
      }
  }
  return true;
};

const assertArraysEqual = function (actualArray, expectedArray) {
  if (eqArrays(actualArray, expectedArray)) {
      console.log(`Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
      console.log(`Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};

const without = function (source, itemsToRemove) {
  const newArr = [];
  for (let i = 0; i < source.length; i++) {
      if (!itemsToRemove.includes(source[i])) {
          newArr.push(source[i]);
      }
  }
  return newArr;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3, 4, 5], [1, 2]));
console.log(without(["a", "b", "c", "d"], ["a", "c"]));
console.log(without([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4]));
console.log(without(["a", "b", "c", "d", "e", "f", "g", "h"], ["a", "c", "e", "g"]));
