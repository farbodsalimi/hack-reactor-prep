function isLessThan30(num) {
  if (num && num < 30) return true;
  return false;
}

var output = isLessThan30(9);
console.log(output); // --> true
