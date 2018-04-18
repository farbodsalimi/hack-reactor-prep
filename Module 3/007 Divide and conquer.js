/*
Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.

Notes:
* If you don't find the value, you can return null.
* If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).

*/

function search(array, value) {
  return BinarySearch(array, value, 0, array.length);
}

function BinarySearch(values, target, start, end) {
  if (start > end) return null;

  var midpoint_index = Math.floor((start + end) / 2);
  var midpoint = values[midpoint_index];

  if (target === midpoint) {
    return midpoint_index;
  } else if (target > midpoint) {
    return BinarySearch(values, target, midpoint_index + 1, end);
  } else {
    return BinarySearch(values, target, start, midpoint_index - 1);
  }
}

console.log(search([1, 3, 16, 22, 31, 33, 34], 7));
