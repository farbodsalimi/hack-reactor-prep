function getNthElement(array, n) {
  if (array.length > 0) {
    return array[n];
  }
  return undefined;
}

var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3
