function findSmallestNumberAmongMixedElements(arr) {
  var smallest = 0;
  if (arr.length > 0) {
    arr.forEach(function(each) {
      if (typeof each === 'number') {
        if (smallest) {
          if (each < smallest) smallest = each;
        } else {
          smallest = each;
        }
      }
    });
  }
  return smallest;
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
