const userEmail="b@gmail.com"
if(userEmail){
    console.log("Got user email");
    
}else{
    console.log("Don't have userEmail");
    
}

const a=""
if(a){
    console.log("True");
    
}else{
    console.log("false");
    
}

const arr=[]
if(arr){
    console.log("True");
    
}else{
    console.log("False");
    
}

//falsy values
/*false ,0 ,-0,bigInt (0n),"",null,undefined,NaN*/

//Truthy values
/* "0",'false' ," "(space in string),[],{},function(){}
empty arrays ,empty objects and empty functions are truthy */

if(arr.length===0){//to check empty array 
    console.log("Array is empty");
    
}

const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("Empty Object");
    
}
//Object.keys(emptyobj) return array therefore same as
//above therefore .length


//false==0 ->true
//false==''->true
//0==''->true

//Nullish Coalescing Operator (??):null undefined
let val1;
// val1 =5??10//val1=5
// val1=null ?? 10 //val1 =10
//val1 =undefined ?? 15//val1=15
//t overwrite values of null and undefined

val1 =null ??10 ??15//first value is assigned that is 10
console.log(val1);


//Ternary Operator
// condition ?true :false

const iceTeaPrice =100
iceTeaPrice <=80 ?console.log("less than 80"):console.log("More than 80");
;
