console.log("Homework 03");
//Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі
const getMaxDigit = (number) => {
    let max = 0;
    while(number >0 ) {
       const digit = number%10;
       if (digit > max){
         max = digit;
        }
number=Math.floor(number/10);
    }

    return max;

}
console.log();
const getMaxDigit1 = (number) => Math.max(...number.toString().split(''));
console.log('MaxDigit in number 7777888999 is',getMaxDigit1('7777888999'),'MaxDigit in number 123456 is',getMaxDigit('123456'));

//Створити функцію, яка визначає ступінь числа.
const getPow = (number, pow)=>{
    let result = number;
    while (pow > 1) {
        pow--;
        result*=number;
    }
    return result;
}
console.log('Result 4**4=',getPow(4,4));

//Створити функцію, яка визначає ступінь числа.
const getCorrectName = (name) => name && typeof name ==='string' ? name[0].toUpperCase()+name.slice(1) : `Некоректний тип даних : ${name}`;
console.log('Your name in correct form:',getCorrectName('yuriy'));

//Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати
const getCleanSallary = (sallary, tax1, tax2) => Math.round(sallary*(1-(tax1+tax2)/100));
console.log('Clean Sallary after paid taxies',getCleanSallary(1000, 18, 1.5)); 

//Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M
const randomNumber = (m, n) =>  Math.round(Math.random()*(n-m)+m);
console.log('Your random number from 4 to 10 is:',randomNumber(10, 4));

//Створити функцію, яка рахує скільки разів певна буква повторюється в слові
const countLetter = (letter, word) => word.toLowerCase().split(letter).length-1;
console.log('How many letters a in word Асталавіста?',countLetter("а", "Асталавіста"));

//Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку
const convertCurrency = (money) => {
    let result;
    const currency = money.toUpperCase().endsWith('UAH') ? '$' : money.endsWith('$') ? 'UAH' : undefined;
    money=parseInt(money);
    switch(currency){
        case 'UAH' :
          result = money*25+currency;
          break;
          case '$' : 
          result = money/25+currency;
          break;
          default :
          result = 'Помилка. Не підтримувана валюта'
    }
    return result;
}
console.log('Your money in $ from 100uah=',convertCurrency('100uah'));

//Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам
const getRandomPassword = (n=8) => randomNumber(getPow(10,n-1), getPow(10,n)-1);
console.log('Your password is 8 random numbers', getRandomPassword(),'Your password is 3 random numbers', getRandomPassword(3));

//Створіть функцію, яка видаляє всі букви з речення
const deleteLetters =(letter, word) => word.split(letter).join('');
const deleteLetters1 = (letter, word) => word.replaceAll(letter,'');
console.log('Delete Letters a from blablabla',deleteLetters('a','blablabla' ), 'Delete Letters a from adfgavasdafg',deleteLetters1('a', 'adfgavasdafg'));

//Створіть функцію, яка перевіряє, чи є слово паліндромом
const isPalyndrom = (string) => string===string.split('').reverse().join('');

const isPalyndrom1 = (str) => {
    let result = true;
    let length = str.length;
    let i = 0;
    while(i < Math.floor(length/2) && result) {
        if (str[i] !== str[length-i-1] ){
            result = false;
        }
        i++;
    }

    return result;
}
console.log('is Palyndrom? ababagalamaga',isPalyndrom('ababagalamaga'), 'Is Palyndrom? ababa',isPalyndrom1('ababa'));

//Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу
const deleteDuplicateLetter = (string) => {
    let result = '';
    string = string.toLowerCase();
    for (index in string) {
        const letter = string[index];
        if (string.indexOf(letter) === string.lastIndexOf(letter)) {
            result+=letter;
        }
    }
    return result;
}
console.log('Delete duplicat letters for "Бісквіт був дуже ніжним" : ', deleteDuplicateLetter("Бісквіт був дуже ніжним"));




