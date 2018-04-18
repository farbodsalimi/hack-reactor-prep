function getElementsThatEqual10AtProperty(obj, key) {
  var arr = [];
  for (var elem in obj[key]) {
    if (obj[key][elem] == 10) {
      arr.push(obj[key][elem]);
    }
  }
  return arr;
}

var obj = {
  key: [1000, 10, 50, 10]
};

var output = getElementsThatEqual10AtProperty(obj, 'key');

console.log(output); // --> [10, 10]
