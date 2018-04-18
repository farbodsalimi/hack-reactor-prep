// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  var classListWithAges = [];
  for (var i = 0; i < classList.length; i++) {
    classListWithAges[i] = {
      name: classList[i],
      age: getRandomIntInclusive(10, 11)
    };
  }
  return classListWithAges;
}

var classList = [
  'Joe',
  'Jack',
  'John',
  'Fred',
  'Frank',
  'Barry',
  'Larry',
  'Mary',
  'Harry',
  'Farrell',
  'Susan',
  'Monica',
  'Keira',
  'Caroline',
  'Harriet',
  'Erica',
  'Luann',
  'Cheryl',
  'Beth',
  'Rupa',
  'Linda',
  'Allison',
  'Nancy',
  'Dora'
];

console.log(decorateClassListWithAges(classList));
