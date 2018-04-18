function getElementsUpTo(array, n) {
  return array.slice(0, n);
}

var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3);
console.log(output); // --> ['a', 'b', 'c']
