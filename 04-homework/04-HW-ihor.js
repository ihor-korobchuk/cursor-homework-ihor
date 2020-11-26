console.log('Homework 4');
const STUDENTS = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const THEMES = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const MARKS = [4, 5, 5, 3, 4, 5];

const getPairs = (students) => {
const filterGirls = (item) => item.endsWith('а')||item.endsWith('я');
const filterBoys = (item) => !filterGirls(item);
const girls= students.filter(filterGirls);
const boys= students.filter(filterBoys);
arrPair = [];
for (i=0; i<boys.length; i++){
     arrPair[i] = [boys[i], girls[i]];
}
return arrPair;
}
const pairs = getPairs(STUDENTS);
console.log(pairs);
// let result = [];
// // for (i=0; i< pairs.length; i++) {
// //     const newElement = [];
// //     newElement.push(pairs[i].join(' i '));
// //     newElement.push(THEMES[i]);
// //     result.push(newElement);
// // }
// const createNewItem =  (item, i) => {const newElement = [];
//         newElement.push(item.join(' i '));
//         newElement.push(THEMES[i]);
//     return newElement}

let result = [];
for (i=0; i< STUDENTS.length; i++) {
    const newElement = [];
    newElement.push(STUDENTS[i]);
    newElement.push(MARKS[i]);
    result.push(newElement);
}
// console.log('my try',result);


const addThemes = (pairs, themes) => pairs.map(( item, i) =>[ item.join(' i '), themes[i] ]);
const pairsWithThemes = addThemes(pairs, THEMES);
// console.log(pairsWithThemes);


const studentMarks = (names, marks) => names.map((name, i) => [name, marks[i]]);
const namesWithMarks = studentMarks(STUDENTS, MARKS);
// console.log(namesWithMarks);
const randomMark = () => Math.round(Math.random()*4 + 1); 
const addThemesAndMarks = () => pairsWithThemes.map( item =>[...item, randomMark()]);
const addMarksAndThemes = (pairs,themes) => pairs.map(( item, i) =>[ item.join(' i '), themes[i], randomMark() ]);
console.log('all', addMarksAndThemes(pairs, THEMES), addThemesAndMarks());