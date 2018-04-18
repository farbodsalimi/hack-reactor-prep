function squareElements(arr) {
  return arr.map(function(x) {
    return Math.pow(x, 2);
  });
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
