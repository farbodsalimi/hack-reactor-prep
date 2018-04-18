function square(n) {
  return n * n;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    return 'passed';
  } else {
    return (
      'FAILED [' +
      testName +
      '] Expected "' +
      expected +
      '", but got "' +
      actual +
      '"'
    );
  }
}

assertEqual(square(2), 4, 'its not squre');
