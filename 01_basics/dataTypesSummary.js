//Primitive 

//7 types:String ,Number,Boolean,null,undefined,Symbol,BigInt

const score =100;
const scoreValue=100.3;
const isLoggedIn =false;

const outsideTemp = null;
let userEmail;

const id=Symbol('123');//agar same bhi pass karenge to result diff because symbol unique
const anotherId=Symbol('123')
console.log(typeof anotherId);


console.log(id===anotherId);

const bigNumber=4547597832794981749n
console.log(typeof bigNumber);
//bigint


//Reference (Non primitive)

//Array, Objects, Functions

const hero =["shaktiman","naagraj","doga"]

let obj ={
        names :"Bhawneet",
        age :20
}
console.log(obj);
console.log(obj.names);
console.log(obj.age);


const myFunc = function(){
    console.log('Hello');
    
}
myFunc()

