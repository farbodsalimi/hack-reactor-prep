function map(array, callbackFunction) {
  var newArray = [];
  array.forEach(function(element) {
    newArray = newArray + callbackFunction(element);
  });
  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n * n;
  });
}

function assertArraysEqual(actual, expected, testName) {
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
var newArr = map(arr, function(a) {
  return a;
});

assertArraysEqual(newArr, arr, 'not equal');

var cube = cubeAll(arr);
assertArraysEqual(cube, [1, 4, 9], 'not equal');
