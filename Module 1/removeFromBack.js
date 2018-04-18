function removeFromBack(arr) {
  arr.pop();
  return arr;
}

var output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]
