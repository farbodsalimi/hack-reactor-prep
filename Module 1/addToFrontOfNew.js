function addToFrontOfNew(arr, element) {
  var arr_new = arr.slice();
  arr_new.unshift(element);
  return arr_new;
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]
