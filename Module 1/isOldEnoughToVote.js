function isOldEnoughToVote(age) {
  if (age >= 18) return true;
  return false;
}

var output = isOldEnoughToVote(22);
console.log(output); // --> true
