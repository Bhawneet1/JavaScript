const accountId = 144455;
let accountEmail = "Hello@gmail.com"
var accountPassword = "12345";
accountCity="Jaipur";
let accountState;//undefined
// accountId=2//not allowed as const
accountEmail="bye@gmail.com";//yeh kar sakte hai as not constant
accountPassword = "3456";
accountCity = "Patna";
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
//var was not in scope means can be accessed out of scope
//now let and const are used