console.log('Homework05');
function getRandomArray(length, min, max) {
const array = new Array(length);
console.log(array);
const  random = (min, max) => Math.random()*(max-min)+min;
   array.map(item => random() );
}
const randomArray = getRandomArray(5,6,7);
console.log(randomArray);
