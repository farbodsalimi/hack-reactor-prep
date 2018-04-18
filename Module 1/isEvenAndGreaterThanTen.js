function isEvenAndGreaterThanTen(num) {
  if (num % 2 === 0 && num > 10) return true;
  return false;
}

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false
