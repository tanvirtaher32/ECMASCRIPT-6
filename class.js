class student{
    constructor(sid,name){
        this.id = sid;
        this.name = name;
        this.varsity="IIUC";
    }
}

const student1 = new student(33,"tanvir");
const student2 = new student(10,"rahim");
console.log(student1,student2);