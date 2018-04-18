/*
Problem description (see instructions for how to de-obfuscate).

Flip every pair of characters in a string.

Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
*/

function flipPairs(input) {
  var result = '';
  var input_arr = input.split('');
  for (var i = 0; i < input.length; i++) {
    var assci = input.charCodeAt(i);
    if (isLetter(assci)) {
      var rot13 = assci + 13;
      if (!isLetter(rot13)) {
        if (isCapital(rot13)) {
          rot13 = rot13 - 122 + 96;
        } else {
          rot13 = rot13 - 90 + 64;
        }
      }
      result += String.fromCharCode(rot13);
    } else {
      result += input[i];
    }
  }
  return result;
}

function isLetter(assci) {
  if ((assci >= 65 && assci <= 90) || (assci >= 97 && assci <= 122))
    return true;
  return false;
}

function isCapital(assci) {
  if (assci >= 65 && assci <= 90) return true;
  return false;
}

var input =
  "check out how interesting this problem is, it's insanely interesting!";
var output = flipPairs(input);
console.log(output);
