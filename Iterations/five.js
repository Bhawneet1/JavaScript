const coding =["js","ruby","java","python","cpp"]
//on arrays direct loop
//forEach
coding.forEach(function (item){//no name
    console.log(item);
    
})


coding.forEach( (i)=>{
    console.log(i+" Learning");
    
})


function printMe(item){
    console.log(item);
    
}
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    //item value
    // index
    //arr entire array
    
})



let myCoding=[
    {
        languageName:"JavaScrpt",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Pyhton",
        languageFileName:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})