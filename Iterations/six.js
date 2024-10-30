const coding=["js","ruby","java","python","cpp"]
const values =coding.forEach((item)=>{
    return item
})
console.log(values);
//undefined (returns nothing in for each)

const myNums =[1,2,3,4,5,6,7,8,9,10]
const newnums=myNums.filter((num)=> num >4)
console.log(newnums);
//filter returns value based on condition [ 5, 6, 7, 8, 9, 10 ]


const newNums1 =myNums.filter((num)=>{
    //scope open to return likhna padega 
    //therefore return
    return num>4
})

console.log(newNums1);



const newNums2=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums2.push(num)
    }
    
})

console.log(newNums2);




const books =[
    {
        title:'Book One',genre:'Fiction',publish:1981,
        edition:2004
    },
    {
        title:'Book Two',genre:'Non-Fiction',publish:1992,
        edition:2008
    },
    {
        title:'Book Three',genre:'History',publish:1999,
        edition:2007
    },
    {
        title:'Book Four',genre:'Non-Fiction',publish:1989,
        edition:2010
    },
    {
        title:'Book Five',genre:'Science',publish:2009,
        edition:2014
    },
]

const userBooks =books.filter((book)=> book.publish >2000)

console.log(userBooks);

const userBook1 =books.filter((book)=>{return((book.publish>1995)&& (book.genre==='Science'))})
console.log(userBook1);
