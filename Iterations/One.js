//for 

for(let i=1;i<11;i++){//CTRL+D to change duplicate
    if(i==5){
        console.log("5 is best number");
        
    }
    console.log(i);
    
}


for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        // console.log(`Outer loop ${i} , inner loop ${j}`);
        console.log(i +" * "+j+" = "+i*j);
        
    }
    
}


let myArray=["Flash","Batman","Superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}



//continue and break

for (let i = 1; i <= 20; i++) {
    if(i==5)
    {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${i}`);
}//break kai baad loop sai exit



for (let i = 1; i <= 20; i++) {
    if(i==5)
    {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}//continue sirf current walla (jiske liye likha hai) wo hi skip karta hai baaki print