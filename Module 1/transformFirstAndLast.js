function transformFirstAndLast(array) {
  var tmp = {};
  tmp[array[0]] = array[array.length - 1];
  return tmp;
}

var array = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
var test = transformFirstAndLast(array);
console.log(test);

function transformFirstAndLast(array) {
  var tmp = {};
  tmp[array[0]] = array[array.length - 1];
  return tmp;
}

var array = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
var test = transformFirstAndLast(array);
console.log(test);
