function isIsogram(text) {
  var letters = text.split('');
  letters = letters.map(function(letter) {
  	return letter.toUpperCase();
  });
  letters = new Set(letters);
  return text.length === letters.size;
}

// Also good:
function isIsogram(text) {
  var chars = text.split('').reduce(function(set, char) {
    return set.add(char.toLowerCase());
  }, new Set());
  return text.length === chars.size;
}


function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

assertEqual(isIsogram(''), true, 'should return true for an empty string');
assertEqual(isIsogram('true'), true, 'cshould return true for an isogram');
assertEqual(isIsogram('assert'), false, 'should return false for non-isogram');
assertEqual(isIsogram('caCAtcHh'), false, 'should ignore case');