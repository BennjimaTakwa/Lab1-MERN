const products = [
  { name: 'Keyboard', price: 45 },
  { name: 'Monitor', price: 320 },
  { name: 'Mouse', price: 25 }
];

// 1. destructuring : on sort name et price du premier produit
const { name, price } = products[0];
console.log(name, price);

// 2. find : on cherche le produit qui s'appelle 'Mouse'
const mouse = products.find(p => p.name === 'Mouse');
console.log(mouse.price);

// 3. filter : on garde les produits dont le prix est < 100
const cheap = products.filter(p => p.price < 100);
console.log(cheap);

// 4. fonction fléchée : prix avec 10% de réduction
const withDiscount = price => price * 0.9;
console.log(withDiscount(320));
