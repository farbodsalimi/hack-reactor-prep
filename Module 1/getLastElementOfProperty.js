function getLastElementOfProperty(obj, key) {
  var elem;
  if (
    typeof obj[key] != 'undefined' &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0
  ) {
    elem = obj[key][obj[key].length - 1];
  }
  return elem;
}

var obj = {
  key: [1, 2, 5]
};

var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5
