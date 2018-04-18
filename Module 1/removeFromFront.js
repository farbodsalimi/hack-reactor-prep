function removeFromFront(arr) {
  return arr.splice(1, arr.length - 1);
}

var output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]
