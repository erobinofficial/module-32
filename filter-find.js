const numbers = [23, 54, 12, 76, 34, 67, 15, 42];
const getBigers = numbers.filter(x => x > 25);
const getSmaller = numbers.filter(x => x < 25);
console.log(getBigers, getSmaller);

const products = [
    {name: 'Water pot', color: 'Grey', size: 'Medium', price: '200'},
    {name: 'Mouse', color: 'Black', size: 'Big', price: '600'},
    {name: 'Earbuds', color: 'Black', size: 'Small', price: '1200'},
    {name: 'Metador Pen', color: 'transparent', size: 'regular', price: '10'},
    {name: 'Scale', color: 'White', size: 'Free', price: '20'}
];
const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const blacks = products.filter(product => product.color == 'Black');
// console.log(blacks);
const white = products.find(product => product.color == 'White');
// console.log(white);
const black = products.find(product => product.color == 'Black');
console.log(black);