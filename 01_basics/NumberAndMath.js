const balance =new Number(100)
console.log(balance);
console.log(typeof balance);

console.log(balance.toString().length);//100 but type change to string
//now apply string methods
console.log(balance.toFixed(2));//2 decimal places

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));
//upto 3 places precision therefore 124
//if we give 4 digit number > precision (3 here) then convert to decimal eg 1123.89 -> 1.12e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
//by default US to convert to Indian standards en-IN

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);


/**********************Maths************************/
console.log(Math);
//object
console.log(Math.abs(-2));
console.log(Math.abs(2));
//-ve to +ve
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
//upar walla integer 5
console.log(Math.floor(4.9));
//neeche walla integer 4
console.log(Math.min(4,3,6,8))//pass Array
console.log(Math.max(4,3,6,8));

console.log(Math.random());//random value b/w 0 to 1
console.log(Math.random()*10);//0 to 10
console.log(Math.floor(Math.random()*10)+1);//1 to 10

const min =10;
const max =20;
//values b/w 10 and 20
console.log(Math.floor(Math.random()*(max- min + 1) )+ min);