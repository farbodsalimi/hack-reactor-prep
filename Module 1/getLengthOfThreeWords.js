function getLengthOfThreeWords(word1, word2, word3) {
  return word1.length + word2.length + word3.length;
}

var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
