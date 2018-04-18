function removeElement(array, discarder) {
  var filteredAry = array.filter(function(e) {
    return e !== discarder;
  });
  return filteredAry;
}

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]
