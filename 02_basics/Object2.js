const tinderUser = new Object()
//singleton
console.log(tinderUser);

tinderUser.id= "123abc"
tinderUser.name="Sammy"
tinderUser.LoggedIn=false

console.log(tinderUser);

const regularUser ={
    email:"Some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Bhawneet",
            lastname:"Singh"
        }
    }
}
console.log(regularUser.fullname?.userfullname.firstname);//agar fullname exist nahi milega to ?


const obj1 ={
    1:"a",
    2:"b"
}
const obj2 ={
    3:"a",
    4:"b"
}

const obj3 ={obj1,obj2}//keep obj1 and obj2 in obj3 as it is
const obj4={...obj1,...obj2}

console.log(obj3);
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj4);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = Object.assign({},obj1,obj2)//target,sources
console.log(obj5);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const user =[
    {
        id:1,
        email:"b@gmail.com"
    },
    {
        id:2,
        email:'a@gmail.com'
    }
]//array of objects
user[1]
console.log(user[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
//all key of object
//return type is array [ 'id', 'name', 'LoggedIn' ]
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'LoggedIn', false ] ] 2d array ker value
console.log(tinderUser.hasOwnProperty('LoggedIn'));
//true