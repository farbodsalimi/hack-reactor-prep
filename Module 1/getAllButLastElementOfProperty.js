function getAllButLastElementOfProperty(obj, key) {
  var arr = [];
  if (
    typeof obj[key] != 'undefined' &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0
  ) {
    for (var i = 0; i < obj[key].length - 1; i++) {
      arr.push(obj[key][i]);
    }
  }
  return arr;
}

var obj = {
  key: [1, 2, 3]
};

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]
