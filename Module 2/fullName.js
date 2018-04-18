function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj[lastName];

  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }

  return obj;
}

function assertObjectsEqual(actual, expected, testName) {
  // your code here
}

var fullname = addFullNameProp({
  firstName: 'Farbod',
  lastName: 'Salimi'
});

var result = assertObjectsEqual(
  fullName,
  {
    firstName: 'Farbod',
    lastName: 'Salimi',
    fullName: 'Farbod Salimi'
  },
  'not equal'
);

console.log(result);
