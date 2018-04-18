function getProductOfAllElementsAtProperty(obj, key) {
  var product = 1;
  if (
    typeof obj[key] != 'undefined' &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0
  ) {
    for (var elem in obj[key]) {
      product = product * obj[key][elem];
    }
  } else {
    product = 0;
  }
  return product;
}

var obj = {
  key: [1, 2, 3, 4]
};

var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
