function getElementsAfter(array, n) {
  var newArr = [];
  for (var i = n + 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output); // --> ['d', 'e']
