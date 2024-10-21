let date =new Date()
console.log(date);
console.log(date.toString());//Mon Oct 21 2024 07:53:57 GMT+0000 (Coordinated Universal Time)
console.log(date.toDateString());//Mon Oct 21 2024
console.log(date.toISOString());//2024-10-21T07:53:57.507Z
console.log(date.toJSON());//2024-10-21T07:53:57.507Z
console.log(date.toLocaleDateString());//10/21/2024 according to pc
console.log(typeof date);//object

let myDate= new Date(2023,0,23)//2023-01-23T00:00:00.000Z
console.log(myDate.toDateString());
//Mon Jan 23 2023
//month start from 0 to 11
console.log(myDate);

let myCreatedDates=new Date(2023,0,23,5,3);
console.log(myCreatedDates.toLocaleString());
//1/23/2023, 5:03:00 AM
//if we pass date as string then month start from 01

let my_new=new Date("01-14-2023")
console.log(my_new.toLocaleString());
console.log(my_new.getTime());
//1673654400000

//compare always in millisec
let myTimeStamp = Date.now()
console.log(myTimeStamp);
//1729497937232 in millisec

console.log(Math.floor(Date.now()/1000));//in sec

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
    
})

