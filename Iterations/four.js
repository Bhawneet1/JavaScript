const myObject ={
    js:"JavaScript",
    cpp:'c++',
    rb:'rubby',
    swift:'Swift from Apple'
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    console.log(`${key}=> ${myObject[key]}`);
    
}



const programming =["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(key);
    //key matlab indexs dai rha hai
    console.log(programming[key]);
    
}

//forof mai direct values milti hai
//forin mai hame key milti hai



const map =new Map()
//map key,value pairs in order with no duplicate values
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")//India will come only once 
for (const key in map) {
    console.log(key);
}

//maps are non-iteratable therefore nothing prints




