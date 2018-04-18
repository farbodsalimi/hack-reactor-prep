function addToBackOfNew(arr, element) {
  var arr_new = arr.slice();
  arr_new.push(element);
  return arr_new;
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
