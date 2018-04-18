function sumDigits(num) {
  let strnum = num.toString();
  sum = 0;
  var i = 0;
  while (i < strnum.length) {
    if (strnum[i] != '-') {
      sum += parseInt(strnum[i]);
      i++;
    } else {
      sum -= parseInt(strnum[i + 1]);
      i += 2;
    }
  }
  return sum;
}

var output = sumDigits(1148);
console.log(output); // --> 14

var output = sumDigits(-316);
console.log(output); // --> 4
