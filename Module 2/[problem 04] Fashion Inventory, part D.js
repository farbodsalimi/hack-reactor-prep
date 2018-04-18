function findAllTheLacedShoes(inventory) {
  var result = [];
  for (var i = 0; i < inventory.length; i++) {
    for (let j = 0; j < inventory[i].shoes.length; j++) {
      var nameWords = inventory[i].shoes[j].name.split(' ');
      var flag = false;
      var tmp = { nameWords: nameWords };
      for (var h = 0; h < nameWords.length; h++) {
        if (nameWords[h].search('lace') >= 0) {
          tmp.targetWordIndex = h;
          flag = true;
        }
      }
      if (flag) {
        result.push(tmp);
      }
    }
  }
  return result;
}

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

console.log(findAllTheLacedShoes(currentInventory));
