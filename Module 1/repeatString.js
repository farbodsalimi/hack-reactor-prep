function repeatString(string, num) {
  var result = '';
  for (var i = 0; i < num; i++) {
    result += string;
  }
  return result;
}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
