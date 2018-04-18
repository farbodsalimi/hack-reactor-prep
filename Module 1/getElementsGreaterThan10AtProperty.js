function getElementsGreaterThan10AtProperty(obj, key) {
  var arr = [];
  for (var elem in obj[key]) {
    if (obj[key][elem] > 10) {
      arr.push(obj[key][elem]);
    }
  }
  return arr;
}

var obj = {
  key: [1, 20, 30]
};

var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]
