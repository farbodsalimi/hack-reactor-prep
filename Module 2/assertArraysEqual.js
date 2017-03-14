function assertArraysEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    return 'passed';
  }else {
    return 'FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"';
  }
}

var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
var actual = 'broken'.split('');
assertArraysEqual(actual, expected, 'splits string into array of characters');
// console output:
// passed
