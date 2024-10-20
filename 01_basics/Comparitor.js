console.log(2>=1);//true
console.log(2>1);//true
console.log(2<1);//false
console.log(2<=1);//false
console.log(2!=1);//true

console.log("2">1);//true
console.log("02">1);//true
//no strict comparision

console.log(null>0);//false
console.log(null ==0);//false
console.log(null >=0);//true
//== work differently and when we compare the null converted to 0 then null>=0 not null>0 but null==0 but == work differently

console.log(undefined>0);//false
console.log(undefined ==0);//false
console.log(undefined >=0);//false

//=== strict check
console.log("2"==2);//true//convert kar deta hai edhar therefore equal
console.log("2"===2);//false
