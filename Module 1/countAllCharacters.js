function countAllCharacters(str) {
  var dict = {};
  if (str !== '') {
    var arr = str.slice();
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

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
