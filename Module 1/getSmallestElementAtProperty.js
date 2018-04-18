function getSmallestElementAtProperty(obj, key) {
  var min;
  if (
    typeof obj[key] != 'undefined' &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0
  ) {
    min = Math.min(...obj[key]);
  }

  return min;
}

var obj = {
  key: [2, 1, 5]
};

var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
