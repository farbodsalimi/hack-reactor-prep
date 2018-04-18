function getSumOfAllElementsAtProperty(obj, key) {
  var sum = 0;
  if (
    typeof obj[key] !== 'undefined' &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0
  ) {
    for (var elem in obj[key]) {
      sum += obj[key][elem];
    }
  }
  return sum;
}

var obj = {
  key: [4, 1, 8]
};

var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
