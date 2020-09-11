class Parent{
    constructor() {
        this.fathername = "akkas Uddin";
    }
}
class Child extends Parent{
    
    constructor(name){
        super();
        this.name = name;
    }
    getFulName(){
        return this.name+" "+this.fathername;
    }
}
const baby = new Child("baby");
const baby2 = new Child("baby2");
console.log(baby.getFulName(),baby2.getFulName());
