function getNthElementOfProperty(obj, key, n) {
  var elem;
  if (
    typeof obj[key] != 'undefined' &&
    typeof obj[key][n] != 'undefined' &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0
  ) {
    elem = obj[key][n];
  }
  return elem;
}

var obj = {
  key: [1, 2, 6]
};

var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2
