//reduce accumulator khali value usme initial value chali
//jati hai
//accumulator ik baar hi initial value leta hai
//phir result store karta rehta hai


const myNums =[1,2,3]

const initialVal=0

const myTotal=myNums.reduce(function(acc,currval){
    console.log(`acc : ${acc} and currval :${currval}`);
    return acc + currval
},initialVal)
console.log(myTotal);


const my_Total=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(my_Total);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"Data Science",
        price:12999
    },
]

const total=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(total);
