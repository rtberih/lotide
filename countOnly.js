  const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed");
  } else console.log("Assertion Failed");
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    // check if item is in itemsToCount
    if (itemsToCount[item]) {
      if (results[item]){
        results[item] += 1
      } else {
        results[item] = 1
      }
    }
  }
  return results;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false,
});
console.log(result1);

assertEqual(result1["Jason"], 1);
 assertEqual(result1["Karima"], undefined);
 assertEqual(result1["Fang"], 2);
 assertEqual(result1["Agouhanna"], undefined);


Radwan:
	function countLetters(sentence) {
  let letterCounts = {};
  for (let letter of sentence) {
      if (letterCounts[letter]) {
          letterCounts[letter]++;
      } else {
          letterCounts[letter] = 1;
      }
  }
  return letterCounts;
}
console.log(countLetters('LHL'));


