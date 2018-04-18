function getAllWords(str) {
  return str.split(' ').filter(Boolean);
}

var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
