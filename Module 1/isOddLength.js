function isOddLength(word) {
  if (word.length % 2 !== 0) return true;
  return false;
}

var output = isOddLength('special');
console.log(output); // --> true
