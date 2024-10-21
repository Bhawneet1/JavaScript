//Stack and Heap memory

//stack for primitive

///heap for reference type(None-Primitive)

//primitive
let names='Bhawneet';
//name keyword
let anotherName=names;
//copy diya jata hai
console.log(names);
console.log(anotherName);
anotherName='Karan';
console.log(anotherName);
console.log(names);


//name of variable jaega Stack kai andar
//aur agar reference hoga to heap pe point karega

let userOne = {
    email: "user@gmail.com",
    upi:"user@gpay"
}
let userTwo=userOne
userTwo.email="Bhawneet@gmail.com"
console.log(userOne);
console.log(userTwo);
//dono same memory location in heap ko point karte hai
//therefore ik mai change to dono mai change
