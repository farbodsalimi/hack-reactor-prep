function getLargestElement(arr) {
  return Math.max.apply(Math, arr);
}

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
