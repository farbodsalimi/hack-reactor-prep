function getAllElementsButLast(array) {
  return array.slice(0, array.length - 1);
}

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]
