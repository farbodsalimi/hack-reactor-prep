function isOldEnoughToDrive(age) {
  if (age >= 16) return true;
  return false;
}

var output = isOldEnoughToDrive(22);
console.log(output); // --> true
