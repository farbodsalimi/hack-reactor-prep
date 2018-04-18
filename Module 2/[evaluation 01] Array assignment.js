var x = [1, 2, 3];
var y = [4, 5, 6];
var z = x;

z[2] = y[0];
z[1] = y[2];
y[1] = z[1];
x[0] = y[0];
x[2] = 1;

var answer = {
  finalValueOfX: null, // FILL THIS IN
  finalValueOfY: null, // FILL THIS IN
  finalValueOfZ: null // FILL THIS IN
};

console.log(x);
console.log(y);
console.log(z);
