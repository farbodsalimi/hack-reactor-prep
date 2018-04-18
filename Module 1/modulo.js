function modulo(num1, num2) {
  if (isNaN(num1)) return NaN;

  var mod = 0;
  if (Math.abs(num1) > 0) {
    var d = Math.floor(Math.abs(num1) / Math.abs(num2));
    mod = Math.abs(num1) - Math.abs(num2) * d;
  }

  if (num1 < 0) mod = -1 * mod;

  return mod;
}

var output = modulo(-1, 2);
console.log(output); // --> 1
