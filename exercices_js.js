const products = [
  { name: 'Keyboard', price: 45 },
  { name: 'Monitor', price: 320 },
  { name: 'Mouse', price: 25 }
];

//  destructuring 
const { name, price } = products[0];
console.log(name, price);

//  find 
const mouse = products.find(p => p.name === 'Mouse');
console.log(mouse.price);

//  filter 
const cheap = products.filter(p => p.price < 100);
console.log(cheap);

// 4. fonction fléchée : prix avec 10% de réduction
const withDiscount = price => price * 0.9;
console.log(withDiscount(320));
