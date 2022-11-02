class Support {
    name;
    role;
    address;
    constructor(name, role, address){
        this.name = name;
        this.role = role;
        this.address = address;
    }
    doWork(){
        console.log(this.name, "Started to learning");
    }
}
const nahid = new Support('Nahid', 'Web Engineer', 'Sakhipur');
const munna = new Support('Munna', 'Senior Manager', 'Ghatail');
console.log(nahid);
console.log(munna);
nahid.doWork();