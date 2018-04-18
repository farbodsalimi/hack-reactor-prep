function removeNumberValues(obj) {
  for (var prop in obj) {
    if (Number.isInteger(obj[prop]) === true) {
      delete obj[prop];
    }
  }
  return obj;
}

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
