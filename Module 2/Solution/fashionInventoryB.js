var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

function renderAverageCosts(inventory) {
  return {
    designers: inventory.map(renderAverageCostPerDesigner)
  };
}

function renderAverageCostPerDesigner(goodsForDesigner) {
  return {
    name: goodsForDesigner.name,
    averagePrice: average(getShoePrices(goodsForDesigner))
  }
}

function getShoePrices(goodsForDesigner) {
  return goodsForDesigner.shoes.map(function(shoe) {
    return shoe.price;
  });
}

function average(numbers) {
  return sum(numbers) / numbers.length;
}

function sum(numbers) {
  return numbers.reduce(function(num1, num2) {
    return num1 + num2;
  });
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

assertEqual(sum([1, 2, 3]), 6, 'should return the sum of the integers in the given array');
assertEqual(average([4, 5, 6]), 5, 'should return the average of the integers in the given array');
assertObjectsEqual(getShoePrices(inventory[0]), [1000, 1100, 950, 1050], 'should filter to shoe prices');

var actualOutput = renderAverageCosts(inventory);
var expectedOutput = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    }
  ,
    {
      'name': 'Gucci',
      'averagePrice': 850
    }  ]
};
assertObjectsEqual(actualOutput, expectedOutput, 'should return the expected output object');