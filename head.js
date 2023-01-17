function head(arr) {
  if (arr.length > 0) {
      return arr[0];
  } else {
      return undefined;
  }
}

function assertEqual(a, b) {
  if (a === b) {
      console.log("Pass");
  } else {
      console.log("Fail");
  }
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
