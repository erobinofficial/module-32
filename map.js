const numbers = [234, 432, 435, 445, 543, 436];
// const resultOld = [];

// const sumIt = number => number*2;

// for(const number of numbers){
//     const changedArray = sumIt(number);
//     result.push(changedArray);
// }

// console.log(...resultOld);

// const resultNew = numbers.map(sumIt);
// const resultNew = numbers.map(number  => number*2);
const resultNew = numbers.map(x => x * 2);
console.log(resultNew);
