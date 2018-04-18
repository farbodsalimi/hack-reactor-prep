function getLargestElementAtProperty(obj, key) {
  var max;
  if (
    typeof obj[key] != 'undefined' &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0
  ) {
    max = Math.max(...obj[key]);
  }
  return max;
}

var obj = {
  key: [1, 2, 4]
};

var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
