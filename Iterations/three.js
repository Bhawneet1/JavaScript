//forof
const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}//no increment , no initialization


const greetings ="Hello World!"
for (const greet of greetings) {
    if(greet ==" "){
        break;
    }
    console.log(greet);
    
}



//Maps
const map =new Map()
//map key,value pairs in order with no duplicate values
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")//India will come only once 
console.log(map);
/*Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}*/

for (const key of map) {
    console.log(key);
    
}
/*[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]*/


for (const [key,value] of map) {
    console.log(`${key} => ${value}`);
    
}
/*IN => India
USA => United States of America
Fr => France*/


const myObject={
    'game1':'NFS',
    'game2':'Spiderman'
}


// for (const [key,value] of myObject) {
//     console.log(`${key} => ${value}`);
//}
//TypeError: myObject is not iterable