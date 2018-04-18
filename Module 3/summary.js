// prepration summery

// Math
Math.PI;
Math.pow(num, exponent);
Math.sqrt(num);
Math.max(a, b);
Math.min(a, b);
Math.floor(num);
Math.abs(num);

// Object
Object.keys(obj);
Object.assign({}, obj, { name: 'update' });

// assertObjectsEqual
JSON.stringify(actual) === JSON.stringify(expected);

// findSmallestElement
Math.min.apply(Math, arr);
Math.max.apply(Math, arr);
Math.max(...arr);

//
Array.isArray();
Number.isInteger();

var a = [1, 2, 3];
var b = a.concat(3);

// typeof
typeof variable !== 'undefined';
typeof variable !== 'string';

isNaN();

// addToBack
array.push(element);

// addToBackOfNew
var arr_new = arr.slice();
arr_new.push(element);

// addToFront
array.unshift(element);

// addToFrontOfNew
var arr_new = arr.slice();
arr_new.unshift(element);

// convertDoubleSpaceToSingle
str.replace(/\s+/g, ' ');

// reduce
arr.reduce(function(a, b) {
  return a * b;
});

// filter
arr.filter(function(e) {
  return e % 2 === 0;
});

// forEach
arr.forEach(function(each) {
  if (each.length < shortest.length) shortest = each;
});

//
str.split(char);

//getAllElementsButFirst and last
// return a part of the array
array.slice(1, array.length);
array.slice(0, array.length - 1);

// getElementsUpTo
array.slice(0, n);

// getAllElementsButNth
// remove the range from the array
array.splice(n, 1);

// joinArrayOfArrays
arr1.concat(arr2);
[].concat.apply([], arr);

// delete
delete arr[0];
delete prop['x'];

// squareElements
arr.map(function(x) {
  return Math.pow(x, 2);
});

// return barnd new object
Object.assign;
arr.concat;
arr.filter;
arr.map;
arr.reduce;
