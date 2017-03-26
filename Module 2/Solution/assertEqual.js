function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

assertEqual(5, 5, 'should pass for equal values');