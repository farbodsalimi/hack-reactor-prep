function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  return classList.map(function(name) {
  	var nameObj = {
  		name: name
  	};
  	nameObj['age'] = getRandomIntInclusive(10,11);
  	return nameObj;
  })
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

function assertWithinRange(low, high, actual, testName) {
  var inRange = low <= actual && actual <= high;
  if (inRange) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] "' + actual + '" not within range ' + low + ' to ' + high);
  }
}

var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

var output = decorateClassListWithAges(classList);

assertEqual(Array.isArray(output), true, 'returns an array');

output.forEach(function(student) {
  assertWithinRange(10, 11, student.age, 'renders all ages either 10 or 11');
})
