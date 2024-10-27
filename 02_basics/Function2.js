function calculateCartPrice(val1,val2,...num1){//rest 
    return num1
}
//val1 and val2 go as it is and rest in num1
//store in array and return 
console.log(calculateCartPrice(200));
console.log(calculateCartPrice(200,400,500,2000));


const user={
    username:"Bhawneet",
    price:199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject(user)
//if wrong Price extracted then undefined
handleObject({
    username:"Sam",
    price:399
})

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([
    10,20,30,40
]));
