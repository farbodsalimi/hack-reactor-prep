function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj.lastName;

  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }

  return obj;
}

function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if ( actual === expected ) {
  	console.log('PASSED [' + testName + ']');
  } else {
  	console.log('FAILED [' + testName + '], expected "' + expected + '", but got "' + actual + '"')
  }
}

// Also OK:
function assertObjectsEqual(actual, expected, testName) {
  if ( JSON.stringify(actual) === JSON.stringify(expected) ) {
    console.log('PASSED [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '], expected "' + expected + '", but got "' + actual + '"')
  }
}


/////////////////////////////////
// Tests for "assertObjectsEqual"
/////////////////////////////////

var objectA = {foo: 1};
var objectB = {foo: 1};
assertObjectsEqual(objectA, objectB, 'should pass when given two identical objects');

// Note: testing assertion functions is a bit of "Inception"...
// You have to use an assert to test your other assert.
// And since the output is console-logged, you have to trap that too.
// Hence I don't think it's reasonable to expect students to do the negative test on these.
// I think it's sufficient for students to just console log what these assertions do in the failure cases
// and move on...
// But just for illustration, here it is:
function assert(actual, testName) {
  if ( actual !== true ) {
    console.log('FAILED [' + testName + '] Expected "' + expected + '" to be true.');
  } else {
    console.log('PASSED [' + testName + ']');
  }
}
function testFailureCaseAssertObjectsEqual() {
  var objectA = {a: 1};
  var objectB = {b: 2};
  var originalConsoleLog = console.log; // we're going to override console logger to be able to trap messages.

  var trappedMsg;
  console.log = function(msg) {
    trappedMsg = msg; // trap the message via a closure
  }
  assertObjectsEqual(objectA, objectB);

  console.log = originalConsoleLog; // restore the mocked logger before doing our real assertion
  assert(trappedMsg.includes('FAILED'), 'should fail when given two different objects');
}
testFailureCaseAssertObjectsEqual();

/////////////////////////////////
// Tests for "addFullNameProp"
/////////////////////////////////

var expectedObject = {
  firstName: "Some",
	lastName: "Thing",
	fullName: "Some Thing"
}
var actualObject = {
	firstName: "Some",
	lastName: "Thing"
}
assertObjectsEqual(addFullNameProp(actualObject), expectedObject, 'should add a fullName');