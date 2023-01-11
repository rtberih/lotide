const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE 
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
 

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