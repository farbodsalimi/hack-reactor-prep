function countCharacter(str, char) {
  if (char) return str.split(char).length - 1;
  return 0;
}

var output = countCharacter('I am a hacker', ' ');
console.log(output); // --> 3
