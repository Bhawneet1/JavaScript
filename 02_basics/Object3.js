const course ={
    coursename:"Js in Hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
//destructuring
const {courseInstructor}=course
console.log(courseInstructor);

const {courseInstructor:instructor}=course
console.log(instructor);


// const navbar =({company})=>{

// }
// navbar(company = "abc")

// {
//     name:"Bhawneet",
//     coursenames:"Something",

// } API

//or
// [
//     {},
//     {},
//     {}
// ]
//array of objects as API