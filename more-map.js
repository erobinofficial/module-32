// const students = ['Munna', 'Razu', 'Nahid', 'Nabil', 'Jahid'];
// const sLenght = students.map(x => x.length);
// console.log(sLenght);
const products = [
    {name: 'Water pot', color: 'Grey', size: 'Medium', price: '200'},
    {name: 'Mouse', color: 'Black', size: 'Big', price: '600'},
    {name: 'Earbuds', color: 'Black', size: 'Small', price: '1200'},
    {name: 'Metador Pen', color: 'transparent', size: 'regular', price: '10'},
    {name: 'Scale', color: 'White', size: 'Free', price: '20'}
]

const productsNames = products.map(x => x.name);
const productsPrices = products.map(x => x.price);
console.log(productsNames);
console.log(productsPrices);
products.map(x => console.log(x.color));
products.forEach(x => console.log(x.size));
products.map(x => console.log(x.price));