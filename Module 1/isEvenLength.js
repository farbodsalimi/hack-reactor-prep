function isEvenLength(word) {
  if (word.length % 2 === 0) return true;
  return false;
}

var output = isEvenLength('wow');
console.log(output); // --> false
