const mach = { nam : 'Cheng Mach', id: 50, address : 'India', price : 4000};
// long way--------
// const address = mach.address;
// const price = mach.price;
// const id = mach.id;

// shortcut way--------
const {price, id, nam} = mach;
console.log(nam);

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
const service = company.objective.service;
console.log(service);

const { name, email} = company.ceo;
console.log(`Ceo name is : ${name} and Email is: ${email}`);

const { fName, version} = company.objective.framework;
console.log(fName ,version);
