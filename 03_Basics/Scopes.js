//var is global scope not block scope
//{} scope of function or condition
var c=300//defined here
let a=200
if(true){
    let a=10
    console.log("Local",a);
    
    const b=20
    var c=30//changed here
}
// console.log(a);//ReferenceError: a is not defined (good)
// console.log(b);//ReferenceError: b is not defined(good)
console.log(c);//prints c therefore(bad)as out of scope should give error
//var can be declared multiple times
console.log(a);//200 as a change in scope but globally it is 200
//Global scope in Browser and code is different