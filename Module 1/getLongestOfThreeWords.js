function getLongestOfThreeWords(word1, word2, word3) {
  var longest = '';
  for (var i = 0; i < arguments.length; i++) {
    if (longest.length < arguments[i].length) {
      longest = arguments[i];
    }
  }
  return longest;
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
