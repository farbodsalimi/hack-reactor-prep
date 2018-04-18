function averageCost(inventory) {
  var average_cost = {};
  average_cost['designers'] = [];
  for (let i = 0; i < inventory.length; i++) {
    average_cost.designers.push({ name: inventory[i].name });
    var sum = 0;
    for (let j = 0; j < inventory[i].shoes.length; j++) {
      sum += inventory[i].shoes[j].price;
    }
    average_cost['designers'][i].averagePrice = sum / inventory[i].shoes.length;
  }
  return average_cost;
}

function assertArraysEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    return 'passed';
  } else {
    return (
      'FAILED [' +
      testName +
      '] Expected "' +
      expected +
      '", but got "' +
      actual +
      '"'
    );
  }
}

var expected = {
  designers: [
    {
      name: 'Brunello Cucinelli',
      averagePrice: 1025
    },
    {
      name: 'Gucci',
      averagePrice: 850
    }
  ]
};

var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];
console.log(averageCost(currentInventory));
console.log(
  assertArraysEqual(averageCost(currentInventory), expected, 'not equal')
);
