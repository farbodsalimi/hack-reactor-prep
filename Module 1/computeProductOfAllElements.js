function computeProductOfAllElements(arr) {
  if (arr.length > 0) {
    return arr.reduce(function(a, b) {
      return a * b;
    });
  } else {
    return 0;
  }
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
