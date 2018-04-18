function listAllValues(obj) {
  var values = [];
  for (var k in obj) values.push(obj[k]);
  return values;
}

var test = {
  name: 'Krysten',
  age: 33,
  hasPets: false
};

console.log(listAllValues(test));
