function computeSummationToN(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

var output = computeSummationToN(6);
console.log(output); // --> 21
