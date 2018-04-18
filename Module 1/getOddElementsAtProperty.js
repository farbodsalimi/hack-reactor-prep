function getOddElementsAtProperty(obj, key) {
  var arr = [];

  if (
    typeof obj[key] != 'undefined' &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0
  ) {
    for (var elem in obj[key]) {
      if (obj[key][elem] % 2 !== 0) {
        arr.push(obj[key][elem]);
      }
    }
  }

  return arr;
}

var obj = {
  key: [1, 2, 3, 4, 5]
};

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
