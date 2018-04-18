function computeFactorialOfN(n) {
  var fac = 1;
  for (var i = n; i > 0; i--) {
    fac *= i;
  }
  return fac;
}

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24
