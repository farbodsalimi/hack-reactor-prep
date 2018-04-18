function every(array, callbackFunction) {
  var doesEveryElementMatch = true;
  array.forEach(function(element) {
    doesEveryElementMatch = callbackFunction(element);
  });
  return doesEveryElementMatch;
}

function assertEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
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

var arr = [1, 2, 3];
arr = every(arr, function(a) {
  return a < 10;
});

console.log(assertEqual(arr, true, 'not okay'));
