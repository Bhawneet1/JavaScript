function sayMyName(){
    console.log("B");
    console.log("h");
    console.log("a");
    console.log("w");
    console.log("n");
    console.log("e");
    console.log("e");
    console.log("t");
    
}
//sayMyName this is reference therefore nothing prints
sayMyName()

function addTwoNumbers(number1,number2){
    return(number1+number2)
}

a=addTwoNumbers(10,2)
// one argument in argument we get NaN
b=addTwoNumbers(10,3,3)
console.log(b);
//if we pass more arguments then it works on first two
console.log(a);

console.log(addTwoNumbers(3,"4"));//34
console.log(addTwoNumbers(3,null));//3
//during defination we have parameters during use we have arguments

function add(num1,num2){
    console.log(num1+num2);
    
}
c=add(10,2);
console.log("result:",c);//as nothing return therefore undefined

//agar return kai baad koi code likhogae to nahi chalega 


function loginUserMessage(username ="Sam"){//default value if nothing passed
    if(username === undefined){//if(!username)//same meaning
        console.log("Please Enter a username");
        return
    }
    return `${username} just logged in`
}
result=loginUserMessage("Bhawneet")
console.log(result);
//if nothing passed then undefined
console.log(loginUserMessage());
