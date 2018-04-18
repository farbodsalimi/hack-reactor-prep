function getLengthOfLongestElement(arr) {
  var maxItem = 0;
  var maxLength = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxItem = arr[i];
      maxLength = arr[i].length;
    }
  }
  return maxLength;
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
