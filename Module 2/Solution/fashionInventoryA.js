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

function renderShoesForDesigner(designer, shoeList) {
	return shoeList.map(function(shoe){
		return [designer, shoe.name, shoe.price].join(', ')
	});
}

function renderGoodsStringForDesigner(designerObject) {
	return renderShoesForDesigner(designerObject.name, designerObject.shoes).join('\n');
}

function renderInventory(inventory) {
  return inventory.map(function(designerObject) {
  	return renderGoodsStringForDesigner(designerObject);
  }).join('\n');
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

var designerObject = currentInventory[0];

var shoesForDesigner = renderShoesForDesigner(designerObject.name, designerObject.shoes);
var actualShoeString = shoesForDesigner[0];
var expectedShoeString = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000';

assertEqual(actualShoeString, expectedShoeString, 'should return shoe string in proper format');

var actualGoodsStringForDesigner = renderGoodsStringForDesigner(designerObject)
var expectedGoodsStringForDesigner = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050';

assertEqual(actualGoodsStringForDesigner, expectedGoodsStringForDesigner, 'should return goods for designer in proper format');

var output = renderInventory(currentInventory);

assertEqual(typeof output, 'string', 'should return a string');

var outputArray = output.split('\n');
var expectedOutputString = 'Gucci, black leather laced sneakers, 900'

assertEqual(outputArray.length, 6, 'should return 6 lines');

assertEqual(outputArray.pop(), expectedOutputString, 'should return expected lines of output');