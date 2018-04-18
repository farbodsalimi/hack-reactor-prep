function getStringLength(string) {
  var i = 0;
  while (true) {
    if (string[i]) i++;
    else break;
  }
  return i;
}

var output = getStringLength('hello');
console.log(output); // --> 5
