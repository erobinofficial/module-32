class TeamMmbers {
    name;
    role;
    address;
    constructor(name, role, address){
        this.name = name;
        this.role = role;
        this.address = address;
    }
}
class Support extends TeamMmbers {
    supportTime;
    constructor(name, role, address, time){
        super(name, role, address)
        this.supportTime = time;
    }
    doWork(){
        console.log(this.name, "Started to learning", this.supportTime);
    }
}

class Coaching extends TeamMmbers {
    doTeach(student){
        console.log(this.name, "Start to teaching", student);
    }
}
const nabil = new Coaching('Nabil', 'Lecturer', 'Jhenaidah');
console.log(nabil);
nabil.doTeach('Chaity');
const nahid = new Support('Nahid', 'Web Engineer', 'Sakhipur', 11);
const munna = new Support('Munna', 'Senior Manager', 'Ghatail', 07);
console.log(nahid);
console.log(munna);
nahid.doWork();