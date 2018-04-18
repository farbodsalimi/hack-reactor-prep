function getElementsLessThan100AtProperty(obj, key) {
  var arr = [];
  for (var elem in obj[key]) {
    if (obj[key][elem] < 100) {
      arr.push(obj[key][elem]);
    }
  }
  return arr;
}

var obj = {
  key: [1000, 20, 50, 500]
};

var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]
