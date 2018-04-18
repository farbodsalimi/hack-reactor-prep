function findShortestElement(arr) {
  var shortest = 0;
  if (arr.length > 0) {
    var shortest = arr[0];
    arr.forEach(function(each) {
      if (each.length < shortest.length) shortest = each;
    });
  }
  return shortest;
}

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
