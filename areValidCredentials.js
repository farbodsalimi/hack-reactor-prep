function areValidCredentials(name, password) {
  if(name.length > 3 && password.length >= 8) return true;
  return false;
}

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true