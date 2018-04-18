function getProperty(obj, key) {
  if (obj) return obj[key];
  return null;
}

var obj = {
  key: 'value'
};

var output = getProperty(obj, 'key');
console.log(output); // --> 'value'
