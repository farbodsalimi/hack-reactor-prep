function getAllElementsButFirst(array) {
  return array.slice(1, array.length);
}

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]
