function getLaceNameDataForShoes(inventory) {
  return getAllShoes(inventory)
         .filter(isLacedShoe)
         .map(getLaceNameDataForShoe);
}

function getAllShoes(inventory) {
  return inventory.reduce(function(shoes, goodsForDesigner) {
    return shoes.concat(goodsForDesigner.shoes);
  }, []);
}

function isLacedShoe(shoe) {
  return isLaced(shoe.name);
}

function isLaced(name) {
  return name.indexOf('lace') >= 0;
}

function getLaceNameDataForShoe(shoe) {
  var nameWords = shoe.name.split(' ');
  return {
    nameWords: nameWords,
    targetWordIndex: nameWords.findIndex(isLaced)
  };
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

function testRendersOutputFormat() {
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
  var output = getLaceNameDataForShoes(inventory);
  var expectedOutput = [
    {
      "nameWords": [
        "tasselled",
        "black",
        "low-top",
        "lace-up"
      ],
      "targetWordIndex": 3
    },
    {
      "nameWords": [
        "tasselled",
        "green",
        "low-top",
        "lace-up"
      ],
      "targetWordIndex": 3
    },
    {
      "nameWords": [
        "red",
        "leather",
        "laced",
        "sneakers"
      ],
      "targetWordIndex": 2
    },
    {
      "nameWords": [
        "black",
        "leather",
        "laced",
        "sneakers"
      ],
      "targetWordIndex": 2
    }
  ];
  assertObjectsEqual(output, expectedOutput, 'should render output array identical to expected output array');
}

// Run test suite
testRendersOutputFormat();
