function square(n) {
  return n * n;
}

function assertEqual(actual, expected, testName) {
  if ( actual !== expected ) {
  	console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  } else {
  	console.log('PASSED [' + testName + ']');
  }
}

assertEqual(square(3), 9, 'squares a number');
assertEqual(square(-3), 9, 'squares a negative');
assertEqual(square(1), 1, 'squares one');
assertEqual(square(0), 0, 'squares zero');
