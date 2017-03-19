function map(array, callbackFunction) {
  var newArray = [];
  array.forEach(function(element) {
    newArray.push(callbackFunction(element));
  });
  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n * n * n;
  });
}

function assertArraysEqual(actual, expected, testName) {
  var areEqualLength = actual.length === expected.length;
  var areEqualItems = actual.every(function(item, index) {
    return item === expected[index];
  });

  if (areEqualLength && areEqualItems) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

function cube(n) {
  return n * n * n;
}

assertArraysEqual(map([1, 2, 3], cube), [1, 8, 27], 'should successfully map an array');
assertArraysEqual(cubeAll([1, 2, 3]), [1, 8, 27], 'should successfully map a cubed array');
