function findMaxRepeatCountInWord(word) {
  var myMap = new Map();
  for (let i = 0; i < word.length; i++) {
    if (!myMap.has(word[i])) {
      myMap.set(word[i], 1);
    } else {
      myMap.set(word[i], myMap.get(word[i]) + 1);
    }
  }

  max_key = 0;
  max_value = 0;
  for (let [key, value] of myMap) {
    if (value > max_value) {
      max_key = key;
      max_value = value;
    }
  }

  return { letter: max_key, count: max_value };
}
//console.log(findMaxRepeatCountInWord('test'));
//for (let item of findMaxRepeatCountInWord('test')) console.log(item);

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  for (let i = 0; i < text.length; i++) {
    var repeatCountForWord = findMaxRepeatCountInWord(text[i]).count;

    if (repeatCountForWord > maxRepeatCountOverall) {
      maxRepeatCountOverall = repeatCountForWord;
      wordWithMaxRepeatCount = text[i];
    }
  }
  return wordWithMaxRepeatCount;
}

console.log(findFirstWordWithMostRepeatedChars(['test', 'aaaa', 'hello']));
