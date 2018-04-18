function removeStringValuesLongerThan(num, obj) {
  for (var prop in obj) {
    if (obj[prop].length > num) {
      delete obj[prop];
    }
  }
  return obj;
}

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
