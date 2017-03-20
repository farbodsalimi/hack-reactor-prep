function every(array, callbackFunction) {
  var doesEveryElementPass = true;
  array.forEach(function(element) {
    doesEveryElementPass = doesEveryElementPass && callbackFunction(element);	
  });
  return doesEveryElementPass;
}

// Bonus: Cooler functional style.
function every(array, callbackFunction) {
  return array.reduce(function(allPass, element) {
    return allPass && callbackFunction(element); 
  }, true);
}

function assertEqual(actual, expected, testName) {
  if ( actual === expected ) {
  	console.log('PASSED [' + testName + ']');
  } else {
  	console.log('FAILED [' + testName + '] expected "' + expected + '", but got "' + actual + '"');
  }
}

function isEven(num) {
  return num % 2 === 0;
}

assertEqual(every([2, 4, 6], isEven), true, 'is true when all values evaluate true');
assertEqual(every([2, 3, 6], isEven), false, 'is false when any value evaluates false');