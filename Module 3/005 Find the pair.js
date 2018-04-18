/*
Given a list of non-negative integers and a target sum, find a pair of numbers
that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/
function findPairForSum(arr, sum) {
  var result;
  var seen = new Set();

  for (var i = 0; i < arr.length; i++) {
    var deff = sum - arr[i];

    if (seen.has(arr[i])) {
      result = [deff, arr[i]];
    }

    seen.add(deff);
  }

  return result;
}
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
