function flipEveryNChars(input, n) {
  var result = '';

  /*
  brute force algorithm
  for (var i = 0; i < input.length; i+=5) {
    result+= input[i+4];
    result+= input[i+3];
    result+= input[i+2];
    result+= input[i+1];
    result+= input[i];
  }
  */

  var re = new RegExp('.{1,' + n + '}', 'g');
  var splited_array = input.match(re);
  for (var i = 0; i < splited_array.length; i++) {
    result += splited_array[i]
      .split('')
      .reverse()
      .join('');
  }

  return result;
}

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
