function arrayToString(array) {
  let convertedArrayToString = '';
  for (let i = 0; i < array.length; i++) {
    return convertedArrayToString += array[i];
  }
}

function assertArraysEqual(actual, expected, testName) {
  if (arrayToString(actual) === arrayToString(expected)) {
    return console.log('passed');
  } else {
    return console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
  }
}

let expected = ['b', 'r', 'o', 'k', 'e', 'n'];
let actual = 'broken'.split('');
assertArraysEqual(actual, expected, 'splits string into array of characters');
