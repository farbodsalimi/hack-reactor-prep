var currentInventory = [
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

function filterBlackShoes(shoeList) {
  return shoeList.filter(function(shoe){
    return shoe.name.indexOf('black') !== -1;
  })
}

function renderBlackShoesForDesigner(designer, shoeList) {
  shoeList = filterBlackShoes(shoeList);
	return shoeList.map(function(shoe){
		return [designer, shoe.name, shoe.price].join(', ')
	})
}

function renderFilteredGoodsStringForDesigner(designerObject) {
  return renderBlackShoesForDesigner(designerObject.name, designerObject.shoes).join('\n');
}

function renderInventory(inventory) {
  return inventory.map(function(designerObject) {
  	return renderFilteredGoodsStringForDesigner(designerObject);
  }).join('\n');
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

var designerObject = currentInventory[0];

var blackShoesForDesigner = filterBlackShoes(designerObject.shoes);
var actualShoeObject = blackShoesForDesigner[0];
var expectedShoeObject = { name: 'tasselled black low-top lace-up', price: 1000 };

assertObjectsEqual(actualShoeObject, expectedShoeObject, 'should return black shoe object');

assertEqual(blackShoesForDesigner.length, 1, 'should return an array with only one object');

var blackShoesStringForDesigner = renderFilteredGoodsStringForDesigner(designerObject);
var expectedBlackShoesString = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000';

assertEqual(blackShoesStringForDesigner, expectedBlackShoesString, 'should return properly formatted string');

var output = renderInventory(currentInventory);

assertEqual(typeof output, 'string', 'should return a string');

var outputArray = output.split('\n');
var expectedOutputString = 'Gucci, black leather laced sneakers, 900'

assertEqual(outputArray.length, 2, 'should return 2 lines');

assertEqual(outputArray.pop(), expectedOutputString, 'should return expected lines of output');