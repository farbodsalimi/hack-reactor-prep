function isSameLength(word1, word2) {
  if (word1.length === word2.length) return true;
  return false;
}

var output = isSameLength('words', 'super');
console.log(output); // --> true
