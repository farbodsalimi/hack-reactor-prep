function assertObjectsEqual(actual, expected, testName) {
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

var expected = { foo: 5, bar: 6 };
var actual = { foo: 5, bar: 6 };
assertObjectsEqual(actual, expected, 'detects that two objects are equal');
// console output:
// passed

var expected = { foo: 6, bar: 5 };
var actual = { foo: 5, bar: 6 };
assertObjectsEqual(actual, expected, 'detects that two objects are equal');
// console output:
// FAILED [my test] Expected {"foo":6,"bar":5}, but got {"foo":5,"bar":6}
