function findShortestWordAmongMixedElements(arr) {
  var shortest = '';
  if (arr.length > 0) {
    arr.forEach(function(each) {
      if (typeof each === 'string') {
        if (shortest) {
          if (each.length < shortest.length) shortest = each;
        } else {
          shortest = each;
        }
      }
    });
  }
  return shortest;
}

var output = findShortestWordAmongMixedElements([]);
console.log(output); // --> 'two'
