function getLargestNumberAmongMixedElements(arr) {
  var largest = 0;
  if (arr.length > 0) {
    arr.forEach(function(each) {
      if (typeof each === 'number') {
        if (largest) {
          if (each > largest) largest = each;
        } else {
          largest = each;
        }
      }
    });
  }
  return largest;
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
