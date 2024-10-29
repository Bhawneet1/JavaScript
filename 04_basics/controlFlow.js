// const isUserLoggedIn=true
// if(isUserLoggedIn){

// }

if(2=="2"){
    console.log("executed");
    
}

if(2==="2"){
    console.log("executed");
    
}//strict check

//<,>,>=,<=,==,===,!=

let temp=41;
if(temp=== 41){
    console.log("Temperature less than 50");
    
}
else
{
    console.log("Temperature greater than 50");
    
}


const score=200

if(score >100){
    const power ="fly"
    console.log(`User Power: ${power}`);
    
}



const balance =1000
if(balance > 500) console.log("test"),//comma sai seperate but not recommended as not readable
console.log("test2");

//implicit scope only in one line

if(balance<500)
{
    console.log("less than 500");
    
}else if(balance <750){
    console.log("less than 750");
    
}else if(balance<900){
    console.log("balance less than 900");
    
}else
{
    console.log("greater than 1000");
    
}



const UserLoggedIn =true
const debitCard =true
const loggedInFromEmail =false
if(UserLoggedIn && debitCard){
    console.log("Allow to buy");
    
}

if((UserLoggedIn || loggedInFromEmail) &&debitCard){
    console.log("Allow to buy");
    
}