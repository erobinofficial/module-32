
const getNumber = {x : 43, y : 54, z : 75, k : 23, i : 0};
const {i, z, k} = getNumber;
console.log(z, k);

// destructuring in  array------
const [p, q] = [1, 2, 3];
console.log(q);

const company = { 
    name : 'return0',
    address : 'Banani',
    ceo : {
        name: 'Mr Bush',
        id : 24,
        email : 'ceo@return0.com'
    },
    objective: {
        service : 'Web Development',
        employee: 15,
        framework: {
            fName : 'React',
            version : 3,
        }
    }
}

console.log(company?.techworld?.framework.fName);
console.log(company?.objective?.framework?.fName);