function multiply(num1, num2) {
  if (num2 === 0) return 0;
  if (num2 > 0) return num1 + multiply(num1, num2 - 1);
  if (num2 < 0) return -multiply(num1, -num2);
}

var output = multiply(4, 7);
console.log(output); // --> 28
