function getLengthOfShortestElement(arr) {
  var shortest = 0;
  if (arr.length > 0) {
    shortest = arr[0].length;
    arr.forEach(function(each) {
      if (each.length < shortest) shortest = each.length;
    });
  }
  return shortest;
}

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
