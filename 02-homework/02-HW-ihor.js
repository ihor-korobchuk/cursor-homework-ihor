console.log("Homework 02");
//Отримайте у користувача число(N) від якого ми будемо складати. Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!
let params = {};
function enterNumber(text) {
    let number;
    do {
       number = Number(prompt(text));
    } while (!Number.isInteger(number));
    return number;
}

params.start = enterNumber("Введіть число від якого починаємо");
params.end = enterNumber("Введіть число до якого будемо складати");

if (params.end < params.start) {
    do {
        params.end = Number(prompt("Друге число повиннне бути більшим за перше, введіть число ще раз:" ));
    }
   while (
    !Number.isInteger(params.end) ||  params.end < params.start)
}
  
//Отримайте у користувача булевий параметр(true/false), який підкаже нам чи потрібно пропускати парні числа. 
const isOnlyOddNumber = confirm("Потрібно пропускати парні числа при обчисленні суми?");

//омежує межу непарних чисел
function oddLimits(params) {
    return {
        start : params.start % 2 === 0 ? params.start + 1 : params.start, 
        end : params.end = params.end%2 === 0 ? params.end -1 : params.end
    }  
 }
 //повертає суму арифметичної прогресії
 function getSummOfArifmProgression(params,delta) {
     //кількість елементів в прогресії
     const n = (params.end-params.start)/delta+1;
     return ((params.start+ params.end)*n/2) 
    }

const sumNumber = isOnlyOddNumber? getSummOfArifmProgression(oddLimits(params), 2) 
                                 : getSummOfArifmProgression (params, 1);

document.write(`Сумма чисел дорівнює : ${sumNumber} `);
