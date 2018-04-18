function getAverageOfElementsAtProperty(obj, key) {
  if (
    typeof obj[key] != 'undefined' &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0
  ) {
    var sum = 0;
    for (var elem in obj[key]) {
      sum += obj[key][elem];
    }
    return sum / obj[key].length;
  } else {
    return 0;
  }
}

var obj = {
  key: [1, 2, 3]
};

var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2
