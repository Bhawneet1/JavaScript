//Immediately Invoked Function Expressions (IIFE)
(function chai(){
    //names iife
    console.log("DB CONNECTED");
    
})();//semicolon jaroori hai
//like arrow function if we add parenthesis therefore immediately execute
//to remove global scope pollution we need iife

//with arrow function
( (name)=> {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
    
})("Bhawneet");//with parameter
//IMMEDIATELY INVOKED FUNCTION KO BAND KARNA PADTA HAI
//THEREFORE SEMICOLON SAI END
(function chaiaur(){
console.log(`DB CONNECTED`);
    
})()