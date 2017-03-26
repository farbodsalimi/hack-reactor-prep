function average(numbers) {
  return sum(numbers) / numbers.length;
}

function sum(numbers) {
  return numbers.reduce(function(sum, number){
  	return sum += number;
  }, 0);
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
  	console.log('PASSED [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

assertEqual(sum([1, 2, 3]), 6, 'test "sum" function');
assertEqual(average([1, 2, 3]), 2, 'test "average" function');