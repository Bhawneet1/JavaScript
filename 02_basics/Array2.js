const marvel_heros =["thor","Ironman","Spiderman"]
const dc_heros =["Superman","Flash","batman"]

// marvel_heros.push(dc_heros)//create array inside array
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][0]);
//[ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'batman' ]]


const all_heros=marvel_heros.concat(dc_heros)
console.log(all_heros);

//take as string and create a single array and return
//[ 'thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'batman' ]

const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);


//spread operator take as elements not array
const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
//multi dem array

const usable_another_array =another_array.flat(Infinity)
//reduce to which depth
console.log(usable_another_array);
console.log(Array.isArray("Bhawneet"));//false
console.log(Array.from("Bhawneet"));
/*[
  'B', 'h', 'a',
  'w', 'n', 'e',
  'e', 't'
]*/
console.log(Array.from({name:"Bhawneet"}));
//can't form array from object directly therefore empty array
//[]

let Score1=100
let Score2=200
let Score3=300
console.log(Array.of(Score1,Score2,Score3));
//forms array
//[ 100, 200, 300 ]
