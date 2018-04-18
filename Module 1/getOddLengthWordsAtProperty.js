function getOddLengthWordsAtProperty(obj, key) {
  var arr = [];

  if (
    typeof obj[key] != 'undefined' &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0
  ) {
    for (var elem in obj[key]) {
      if (obj[key][elem].length % 2 !== 0) {
        arr.push(obj[key][elem]);
      }
    }
  }

  return arr;
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};

var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']
