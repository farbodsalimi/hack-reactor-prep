function getIndexOf(char, str) {
  count = -1;
  var char_arr = str.split('');
  for (var i = 0; i < char_arr.length; i++) {
    if (char_arr[i] == char) {
      count = i;
      break;
    }
  }
  return count;
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2
