let names = "Bhawneet";
const repoCount=50;

console.log(`I am ${names} my repo count is ${repoCount}`);

const gameName = new String('Bhawneet')//to create object
console.log(typeof gameName);
//key is index from 0 to n-1 and value is character at that index
/*
    0->B
    1->h
    2->a
    3->w
    4->n
    5->e
    6->e
    7->t
*/
console.log(gameName[0]);//B
console.log(gameName.__proto__);//{}


console.log(gameName.length);
console.log(gameName.toLowerCase());//do not change original string as in stack
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//in given string at given index which char is there
console.log(gameName.indexOf('a'));//in given string at given index is given char

const gameName1 = "Bhawneet-Singh"

const gameName2 = gameName1.substring(0,4)
//0-4 means 0 to <4 therefore 0,1,2,3 
console.log(gameName2);

const anotherString= gameName1.slice(-12,4)
console.log(anotherString);
//-ve matlab pechai sai


const newString1 ="  Bhawneet  ";
console.log(newString1);
console.log(newString1.trim());//trim all extra spaces

//works only on whitespaces not newline char

const url ="https://www.google%10.com"
console.log( url.replace('%10','-'));

console.log(url.includes('google'));//true

console.log(gameName1.split('-'));
//convert to array with seperator as '-' therefore break it into to parts and store it in array

//anchor(name)
//converts name into anchor tag 
//const contentString = "Hello, world";
//document.body.innerHTML = contentString.anchor("hello");


/*
const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"
*/

//blink no longer valid was a tag in html first

/*
const contentString = "Hello, world";

document.body.innerHTML = contentString.bold();
*/

