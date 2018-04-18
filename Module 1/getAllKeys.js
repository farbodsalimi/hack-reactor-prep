function getAllKeys(obj) {
  var keys = [];
  for (var k in obj) keys.push(k);
  return keys;
}

var test = {
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1
};

console.log(getAllKeys(test));
