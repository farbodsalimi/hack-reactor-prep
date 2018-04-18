function getSquaredElementsAtProperty(obj, key) {
  var arr = [];

  if (
    typeof obj[key] != 'undefined' &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0
  ) {
    for (var elem in obj[key]) {
      arr.push(Math.pow(obj[key][elem], 2));
    }
  }

  return arr;
}

var obj = {
  key: [2, 1, 5]
};

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
