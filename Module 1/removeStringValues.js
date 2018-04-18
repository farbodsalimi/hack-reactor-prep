function removeStringValues(obj) {
  for (var prop in obj) {
    if (typeof obj[prop] === 'string') {
      delete obj[prop];
    }
  }
  return obj;
}

var obj = {
  name: 'Sam',
  age: 20
};

removeStringValues(obj);
console.log(obj); // { age: 20 }
