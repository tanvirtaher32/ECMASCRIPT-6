const array = [10,20,30];
array.push(22);
const array2 = [222,903,829];
// const sum = array.concat(5).concat(array2);
// console.log(sum);
const sum2= [...array,10,...array2];
console.log(sum2);

const number = [1120,12301,2381,621778];
const calc = Math.max(...number);
console.log(calc);