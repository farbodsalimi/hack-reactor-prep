function isLessThan(num1, num2) {
  if (num1 & num2 & (num1 > num2)) return true;
  return false;
}

var output = isLessThan(9, 4);
console.log(output); // --> true
