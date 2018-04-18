function getLengthOfTwoWords(word1, word2) {
  if (word1 && word2) return word1.length + word2.length;
  return 0;
}

var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9
