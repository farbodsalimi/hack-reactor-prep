function keep(array, keeper) {
  var filteredAry = array.filter(function(e) {
    return e === keeper;
  });
  return filteredAry;
}

var output = keep([1, 2, 3, 2, 1], 2);
console.log(output); // --> [2, 2]
