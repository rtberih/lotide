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
