/*
You will be given an array that contains two strings. Your job is to create a
function that will take those two strings and transpose them, so that the
strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W
e o
l r
l l
o d
*/

function transposeTwoStrings(arr) {
  var size = 0;
  if (arr[0].length > arr[1].length) size = arr[0].length;
  else size = arr[1].length;

  result = [];
  for (var i = 0; i < size; i++) {
    var element1 = ' ';
    var element2 = ' ';

    if (typeof arr[0][i] !== 'undefined') element1 = arr[0][i];
    if (typeof arr[1][i] !== 'undefined') element2 = arr[1][i];

    console.log(element1 + ' ' + element2);
  }
}

transposeTwoStrings(['Hello', 'World']);
