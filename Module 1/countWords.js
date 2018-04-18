function countWords(str) {
  var dict = {};
  if (str !== '') {
    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
      if (typeof dict[arr[i]] != 'undefined') {
        dict[arr[i]] += 1;
      } else {
        dict[arr[i]] = 1;
      }
    }
  }
  return dict;
}

var output = countWords('');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
