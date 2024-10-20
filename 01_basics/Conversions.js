let score = 33;
console.log(typeof score);//number

let s="33"
console.log(typeof s);

let valueInNumber=Number(s)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let d="33abc"
let val=Number(d)
console.log(typeof d);//number
console.log(val);//NaN as can't be converted to number


let n=NaN
let n1=Number(n)
console.log(n1);//NaN
console.log(typeof n);//number


let n2=undefined
let n3=Number(n2)
console.log(n3);//NaN
console.log(typeof n3);//number

let isLoggedIn = 1;
let bool = Boolean(isLoggedIn);
console.log(bool);//true


let h="";
let bool_h=Boolean(h)
console.log(bool_h);

//if string empty then false
//if non-empty then true
//space also non-empty

let someNumber=33;

let strNum=String(someNumber)
console.log(strNum);
console.log(typeof strNum);
