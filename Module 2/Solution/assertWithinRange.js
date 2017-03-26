function assertWithinRange(low, high, actual, testName) {
  var inRange = (low <= actual) && (actual <= high);
  if (inRange) {
  	console.log('passed [' + testName + ']');
  } else {
  	console.log('FAILED [' + testName + '] "' + actual + '" not within range ' + low + ' to ' + high);
  }
}

assertWithinRange(8, 10, 9, 'should pass for a value within the range');
assertWithinRange(8, 10, 8, 'should pass for a value at the edge of the range');