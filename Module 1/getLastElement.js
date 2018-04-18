function getLastElement(array) {
  if (array.length > 0) {
    return array[array.length - 1];
  }
  return undefined;
}

var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4
