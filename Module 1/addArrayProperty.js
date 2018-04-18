function addArrayProperty(obj, key, arr) {
  obj[key] = arr;
  return obj;
}

var myObj = {};
var myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]
