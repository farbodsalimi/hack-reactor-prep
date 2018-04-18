function findMaxLengthOfThreeWords(word1, word2, word3) {
  var first_max = Math.max(word1.length, word2.length);
  var second_max = Math.max(first_max, word3.length);
  return second_max;
}

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3
