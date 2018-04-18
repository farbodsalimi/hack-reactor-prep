function detectOutlierValue(str) {
  var arr = str.split(' ');

  odd = [];
  even = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }

  var removable = [];
  if (odd.length > even.length) {
    removable = even;
  } else {
    removable = odd;
  }

  return parseInt(removable) + 1;
}

var output1 = detectOutlierValue('2 4 7 8 10'); // => 3 - Third number is odd, while the rest of the numbers are even
var output2 = detectOutlierValue('1 10 1 1'); //=> 2 - Second number is even, while the rest of the numbers are odd

console.log(output1);
console.log(output2);
