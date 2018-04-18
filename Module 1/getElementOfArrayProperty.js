function getElementOfArrayProperty(obj, key, index) {
  var result;
  if (obj && key && index !== null && key in obj && Array.isArray(obj[key])) {
    result = obj[key][index];
  }
  return result;
}

var obj = {
  key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'
