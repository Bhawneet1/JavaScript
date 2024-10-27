//nested scope
function one(){
    const userName="Bhawneet"
    function two(){
        const website ="Youtube"
        console.log(userName);
        
    }
    //console.log(website);//ReferenceError: website is not defined
    //defined outside two scope not allowed
    two()//Execute as can acces outer function variable as for it it is global

}
one()
//inner walla function bahar walle kai variable access kar sakta hai
//par bahar walla inner walle kai nahi kar sakte
//closure when nested function when child function can access outer variable


if(true){
    const username ="Bhawneet"
    if(username === "Bhawneet"){
        const website = "Youtube "
        console.log(website + username);
        
    }
    //console.log(website);//ReferenceError: website is not defined
    
}
//console.log(username);//ReferenceError: username is not defined


/*********************Interesting***********************/
console.log(addone(5))//this execute 
function addone(num){
    return num+1
}


console.log(addTwo(5))//ReferenceError: Cannot access 'addTwo' before initialization(give error)
const addTwo =function(num){//expression
    return num+2
}
