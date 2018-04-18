function findLongestPalindrome(sentence) {
  var max = '';
  var words = sentence.split(' ');
  for (var i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      if (words[i].length > max.length) {
        max = words[i];
      }
    }
  }
  return max;
}

function reverseString(string) {
  return string
    .split('')
    .reverse()
    .join('');
}

function isPalindrome(word) {
  if (word.toLowerCase() === reverseString(word).toLowerCase()) return true;
  return false;
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

console.log(
  findLongestPalindrome('Anna Civic Kayak Level Madam Mom Noon Racecar')
);
