function getFirstElement(array) {
  if (array.length > 0) {
    return array[0];
  }
  return undefined;
}

var output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1
