console.log('Homework05');
function getRandomArray(length, min, max) {
    let array = new Array(length).fill(0);
    const random = (min, max) => Math.round(Math.random()*(max-min)+min);
    const result = array.map(item =>random(min, max)
    )
      return result;

}

const rndm = (l, a,b) => new Array(l).fill(0).map(_ => Math.round(Math.random()*(b-a)+a));
const randomArray = getRandomArray(5,6,10);
console.log('rndm', rndm(5,6,10));
console.log('Ihor', randomArray);
