//singleton
//when formed from constructor
//Object.create()


//object literals

const mySym=Symbol("key1");
const JsUser ={
    name:"Bhawneet",
    "full name":"Bhawneet Singh",//we can give space in between
    age:20,
    mySym:"mykey1",
    location:"Patiala",
    email:"Bhawneet@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

//not correct way
console.log(JsUser.name);
//correct way
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(JsUser["mySym"]);
console.log(typeof JsUser["mySym"]);
//string but must be symbol
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email ="bhwneet@gmail.com"//change
console.log(JsUser["email"]);
// Object.freeze(JsUser)//to prevent change
//JsUser.email="bh@gmail.com";
//not applied as freeze
console.log(JsUser["email"]);


JsUser.greeting =function(){
    console.log("Hello JS user");//string interpolation
    
}
JsUser.greetingTwo =function(){
    console.log(`Hello js user,${this.name}`);//string interpolation
    
}
console.log(JsUser.greeting);
//[Function (anonymous)]
console.log(JsUser.greeting());
//Hello JS user
//undefined
console.log(JsUser.greetingTwo());

