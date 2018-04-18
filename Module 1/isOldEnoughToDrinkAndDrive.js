function isOldEnoughToDrinkAndDrive(age) {
  if (age >= 21) {
    return false;
  }
  return true;
}

var output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false
