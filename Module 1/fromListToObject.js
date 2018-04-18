function fromListToObject(array) {
  var obj = {};
  for (var i = 0; i < array.length; i++) {
    obj[array[i][0]] = array[i][1];
  }
  return obj;
}

var test = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
console.log(fromListToObject(test));
