function isPersonOldEnoughToDrinkAndDrive(person) {
  if (person) {
    if (person.age > 20 && person.age > 16) {
      return true;
    }
  }
  return false;
}
