function filterEvenLengthWords(words) {
  var filteredAry = words.filter(function(e) {
    return e.length % 2 === 0;
  });
  return filteredAry;
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
