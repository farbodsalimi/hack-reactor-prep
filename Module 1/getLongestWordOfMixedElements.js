function getLongestWordOfMixedElements(arr) {
  var longest = '';
  if (arr.length > 0) {
    arr.forEach(function(each) {
      if (typeof each === 'string') {
        if (longest) {
          if (each.length > longest.length) longest = each;
        } else {
          longest = each;
        }
      }
    });
  }
  return longest;
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
