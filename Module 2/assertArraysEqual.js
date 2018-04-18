function arrayToString(array) {
  let convertedArrayToString = '';
  for (let i = 0; i < array.length; i++) {
    convertedArrayToString += array[i];
  }
  return convertedArrayToString;
}

function arrayToString_simple(array) {
  return array.join('');
}

function assertArraysEqual(actual, expected, testName) {
  if (arrayToString(actual) === arrayToString(expected)) {
    return console.log('PASSED');
  } else {
    return console.log(
      `FAILED [${testName}] Expected ${expected}, but got ${actual}`
    );
  }
}

let expected = ['b', 'r', 'o', 'k', 'e', 'n'];
let actual = ['b', 'r', 'o', 'k', 'e', 'n'];
assertArraysEqual(actual, expected, 'splits string into array of characters'); // passed

let expected2 = ['b', 'r', 'o', 'k', 'e', 'n'];
let actual2 = ['B', 'r', 'o', 'k', 'e', 'n'];
assertArraysEqual(actual2, expected2, 'splits string into array of characters'); // failed
