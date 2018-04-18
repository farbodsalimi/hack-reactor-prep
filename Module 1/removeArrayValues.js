function removeArrayValues(obj) {
  for (var prop in obj) {
    if (Array.isArray(obj[prop]) === true) {
      delete obj[prop];
    }
  }
  return obj;
}

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
};

removeArrayValues(obj);
console.log(obj); // --> { b: 2 }
