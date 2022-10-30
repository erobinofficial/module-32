const numbers = [234, 432, 435, 445, 543, 436];
const result = [];
for(const number of numbers){
    const changedArray = number * 2;
    result.push(changedArray);
}
console.log(result);