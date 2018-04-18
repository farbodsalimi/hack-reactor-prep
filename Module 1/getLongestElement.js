function getLongestElement(arr) {
  var longest = 0;
  if (arr.length > 0) {
    longest = arr[0];
    arr.forEach(function(each) {
      if (each.length > longest.length) longest = each;
    });
  }
  return longest;
}

var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
