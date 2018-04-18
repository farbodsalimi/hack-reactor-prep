function getLengthOfWord(word) {
  if (word) return word.length;
  return 0;
}

var output = getLengthOfWord('some');
console.log(output); // --> 4
