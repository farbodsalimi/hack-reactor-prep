function extend(obj1, obj2) {
  for (let attrname in obj2) {
    if (typeof obj1[attrname] === 'undefined') {
      obj1[attrname] = obj2[attrname];
    }
  }
}

var obj1 = {
  a: 1,
  b: 2
};

var obj2 = {
  b: 4,
  c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}
