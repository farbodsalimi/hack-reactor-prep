function getFirstElementOfProperty(obj, key) {
  var elem;
  if (
    typeof obj[key] != 'undefined' &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0
  ) {
    elem = obj[key][0];
  }
  return elem;
}

var obj = {
  key: [1, 2, 4]
};

var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1
