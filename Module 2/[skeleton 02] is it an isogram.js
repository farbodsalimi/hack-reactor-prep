function isIsogram(text) {
  var mySet = new Set();

  for (var i = 0; i < text.length; i++) {
    if (!mySet.has(text[i])) {
      mySet.add(text[i]);
    } else {
      return false;
    }
  }
  return true;
}

console.log(isIsogram('text'));
