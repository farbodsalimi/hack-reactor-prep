function multiplyBetween(num1, num2) {
  var prod = 0;
  if (num2 > num1) {
    prod = 1;
    for (var i = num1; i < num2; i++) {
      prod *= i;
    }
  }
  return prod;
}

var output = multiplyBetween(2, 5);
console.log(output); // --> 24
