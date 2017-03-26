function assertEqual(actual, expected, testName) {
  if (actual === expected) {
  	console.log('PASSED [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

function findMaxObjectValue(obj) {
  return Object.keys(obj).reduce(function(max, key) {
    return (obj[key] > max) ? obj[key] : max;
  }, -Infinity);
}

function findMaxRepeatCountInWord(word) {
  var counts = word.split('').reduce(function(counts, letter) {
  	counts[letter] = counts[letter] + 1 || 1;
  	return counts;
  }, {});
  return findMaxObjectValue(counts);
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  var words = text.split(' ');
  words.forEach(function(word) {
    var repeatCountForWord = findMaxRepeatCountInWord(word);
    if ( repeatCountForWord > maxRepeatCountOverall ) {
      maxRepeatCountOverall = repeatCountForWord;
      wordWithMaxRepeatCount = word;
    }
  }) 
  return wordWithMaxRepeatCount;
}

assertEqual(findMaxRepeatCountInWord('ooopeiaelskf'), 3, 'finds max repeated letters');
assertEqual(findFirstWordWithMostRepeatedChars('Limit your space'), 'Limit', 'finds max repeats word when no other word has repeats');
assertEqual(findFirstWordWithMostRepeatedChars('Limit your spaaace'), 'spaaace', 'finds max repeats word when other words have repeats');
assertEqual(findFirstWordWithMostRepeatedChars('Limit your spaces'), 'Limit', 'finds 1st word with max repeats when there are ties');