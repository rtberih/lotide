const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }

  const middleIndex = Math.floor(array.length / 2);

  if (array.length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
  
};
console.log(middle([1, 2, 3]));
