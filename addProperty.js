function addProperty(obj, key) {
  obj[key] = true;
  return obj;
}

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true