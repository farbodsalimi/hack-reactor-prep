function computeSumBetween(num1, num2) {
  var sum = 0;
  if (num2 > num1) {
    for (var i = num1; i < num2; i++) {
      sum += i;
    }
  }
  return sum;
}

var output = computeSumBetween(2, 5);
console.log(output); // --> 9
