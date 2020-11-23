console.log("Homework 02");
let firstNum;
let secondNum;

do {
    firstNum = Number(prompt("Введіть число від якого починаємо"));
} while (!Number.isInteger(firstNum));

do {
    secondNum = Number(prompt("Введіть число до якого будемо складати"));
} while (!Number.isInteger(secondNum));

while (secondNum < firstNum) {
    secondNum = prompt("Друге число повиннне бути більшим за перше, введіть число ще раз:" );
  } 
  
    
const onlyPairNumber = confirm("Потрібно пропускати парні числа при обчисленні суми?");

let summNumber = 0;

for (let i = firstNum; i <= secondNum; i++) {
    if (onlyPairNumber && i % 2 === 0) {
        continue;
    }
    summNumber += i;
}

document.write(`Сумма чисел дорівнює : ${summNumber}`);