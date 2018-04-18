function removeOddValues(obj) {
  for (var prop in obj) {
    if (obj[prop] % 2 !== 0) {
      delete obj[prop];
    }
  }
  return obj;
}

var obj = {
  a: 2,
  b: 3,
  c: 4
};

removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
