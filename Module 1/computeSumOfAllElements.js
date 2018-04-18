function computeSumOfAllElements(arr) {
  if (arr.length > 0) {
    return arr.reduce(function(a, b) {
      return a + b;
    });
  } else {
    return 0;
  }
}

var output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // --> 6
