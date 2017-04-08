function findShortestOfThreeWords(word1, word2, word3) {
  var shortest = arguments[0];
  for (var i = 0; i < arguments.length; i++) {
    if (shortest.length > arguments[i].length) {
      shortest = arguments[i];
    }
  }
  return shortest;
}

var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
