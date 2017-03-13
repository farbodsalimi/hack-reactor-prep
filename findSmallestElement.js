function findSmallestElement(arr) {
  return Math.min.apply(Math, arr);
}

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
