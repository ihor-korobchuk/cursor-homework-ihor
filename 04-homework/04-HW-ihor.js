console.log('Homework 04');
const STUDENTS = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const THEMES = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const MARKS = [4, 5, 5, 3, 4, 5];

//Розділіть студентів на пари(хлопець + дівчина)
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
console.log('Pairs',pairs);

//Зіставте пари з попереднього завдання та теми проєктів
const addThemes = (pairs, themes) => pairs.map(( item, i) =>[ item.join(' i '), themes[i] ]);
const pairsWithThemes = addThemes(pairs, THEMES);
console.log('Pairs&Themes',pairsWithThemes);

//Зіставте оцінки(marks) зі студентом(students)
const studentMarks = (names, marks) => names.map((name, i) => [name, marks[i]]);
const namesWithMarks = studentMarks(STUDENTS, MARKS);
console.log('All students wiht marks',namesWithMarks);

// //Зіставте оцінки(marks) зі студентом(students)
// let result = [];
// for (i=0; i< STUDENTS.length; i++) {
//     const newElement = [];
//     newElement.push(STUDENTS[i]);
//     newElement.push(MARKS[i]);
//     result.push(newElement);
// }
// console.log('Second variant',result);

//Поставте кожній парі випадкову оцінку(від 1 до 5)
const randomMark = () => Math.round(Math.random()*4 + 1); 

//const addThemesAndMarks = () => pairsWithThemes.map( item =>[...item, randomMark()]); addThemesAndMarks()
const addMarksAndThemes = (pairs,themes) => pairs.map(( item, i) =>[ item.join(' i '), themes[i], randomMark() ]); 
console.log('Random marks', addMarksAndThemes(pairs, THEMES));