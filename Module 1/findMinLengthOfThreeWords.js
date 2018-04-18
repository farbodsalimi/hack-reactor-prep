function findMinLengthOfThreeWords(word1, word2, word3) {
  var first_min = Math.min(word1.length, word2.length);
  var second_min = Math.min(first_min, word3.length);
  return second_min;
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
