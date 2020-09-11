const person = {name:"tanvir",age:22,job:"student",skill:"developer",address:"chittagong"};
console.log(person);
console.log(person.skill);
console.log(person.skill);
console.log(person.skill);
console.log(person.skill);

const {address} = person;
console.log(address);

const friends = ["aamir","sohan","akij","rahim","jalal"];
const [first,senond ,...rest]= friends;
console.log(first,senond,rest);
