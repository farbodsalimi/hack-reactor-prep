function assertArraysEqual(actual, expected, testName) {
  var areEqualLength = actual.length === expected.length;
  var areEqualItems = actual.every(function(item, i) {
  	return item === expected[i];
  });
  if (areEqualLength && areEqualItems) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3], 'should pass for equal arrays');
