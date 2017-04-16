function joinArrayOfArrays(arr) {
  var result = [].concat.apply([], arr);
  return result;
}

var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']
