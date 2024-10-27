const user ={
    username:"Bhawneet",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} ,Welcome to website`);
        console.log(this);
           
    }
    //to refer to current context use this keyword
}
//complete object in this therefore current context
//context change in Sam
user.welcomeMessage()
//the value will change here therefore print Sam
user.username="Sam"
user.welcomeMessage()
console.log(this);

//{}empty context for this outside
//not in case of browser 
//window is global in browser therefore this in browser is window

// function chai(){
//     let username="Bhawneet"
//     console.log(this.username);
//     //{}
//     //undefined
//     //username is not in context
// }
// chai()


// const chai=function(){
//     let username="Bhawneet"
//     console.log(this.username);
    
// }
// chai()

const chai =()=>{
    let username="Bhawneet"
    console.log(this.username);
    /*{}
    undefined  */
}
chai()

// const addTwo =(num1,num2)=>{
//     console.log(num1+num2);
    
// }
// addTwo(10,20)

const addTwo =(num1,num2)=> (num1+num2)//implicit return
console.log(addTwo(10,20));
//agar curly braces liya to return likhna padega
//agar parenthesis liya to mat likho


const add=(num1,num2)=>({username:"Bhawneet"})//agar object return karna hai to bhi parenthesis lagana padega
console.log(add(10,20));


// const myArray=[2,5,3,7,8]

// myArray.forEach(()=>{

// })