function removeNumbersLargerThan(num, obj) {
  for (var prop in obj) {
    if (obj[prop] > num) {
      delete obj[prop];
    }
  }
  return obj;
}

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
};

removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }
