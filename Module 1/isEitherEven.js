function isEitherEven(num1, num2) {
  if (num1 % 2 === 0 || num2 % 2 === 0) return true;
  return false;
}

var output = isEitherEven(1, 4);
console.log(output); // --> true
