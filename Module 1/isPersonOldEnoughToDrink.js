function isPersonOldEnoughToDrink(person) {
  if (person.age >= 21) return true;
  return false;
}

var obj = {
  age: 16
};

var output = isPersonOldEnoughToDrink(obj);
console.log(output); // --> false
