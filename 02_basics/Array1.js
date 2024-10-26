const myArr =[0,1,2,3,4,5,"hello"];
console.log(myArr);
//non-homogeneous 
//mix of datatypes
//resizable
console.log(myArr[0]);
//0 base indexing

//Shallow copy
//property share same reference point

//deep copy
//properties donot share same reference point


const myHeros = ["Shaktiman","naagraj"];

const myArr2 =new Array(1,2,3,4);
console.log(myArr2[0]);

//add and remove from back
myArr2.push(5)
console.log(myArr2);

myArr2.pop()
console.log(myArr2);

//Add and remove from front
myArr2.unshift(0)
console.log(myArr2);

myArr2.shift()
console.log(myArr2);


console.log(myArr2.includes(9));//false
console.log(myArr2.indexOf(9));//-1 not found
console.log(myArr2.indexOf(3));//2

const newArr= myArr2.join();
console.log(myArr2);
console.log(newArr);//the type change to string
console.log(typeof newArr);

//slice and splice
console.log("A",myArr2);
//A [ 1, 2, 3, 4 ]

const myn1 =myArr2.slice(1,3)
//[1,2] not include 3rd
console.log(myn1);
console.log("B",myArr2);


const myn2 =myArr2.splice(1,3)
//[1,2] not include 3rd
console.log(myn2);
console.log("B",myArr2);

//splice changes original array also and remove from original array
// [1,2,3] include last also