let eqArrays = function(actualArrary, expectedArray){
  if (actualArrary.length !== expectedArray.length){
   return false;
  }
 for (let i = 0; i < actualArrary.length; i++){
 if (actualArrary[i] !== expectedArray[i]){
   return false;
 }
 }
 return true;
}

assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(eqArrays([1,2], [1,2,3]), false);
assertEqual(eqArrays([1,2,3], [1,2]), false);
assertEqual(eqArrays([1,2,3], [1,2,"3"]), false);

let assertArraysEqual = function(actualArray, expectedArray){
  if (eqArrays(actualArray) === eqArrays(expectedArray)) {
    console.log(`Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
}