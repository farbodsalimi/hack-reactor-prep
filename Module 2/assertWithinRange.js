function assertWithinRange(low, high, actual, testName) {
  if (actual > low && actual <= high) {
    return 'passed';
  } else {
    return (
      'FAIL [' +
      testName +
      '] "' +
      actual +
      '" not within range ' +
      low +
      ' to ' +
      high +
      ''
    );
  }
}

var price = 101;
assertWithinRange(1, 100, price, 'price should be between 1 and 100');
// console output:
// FAIL [price should be between 1 and 100] "101" not within range 1 to 100
