console.log("Homework 03");
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
const getMaxDigit1 = (number) => Math.max(...number.toString().split(''));

const getPow = (number, pow)=>{
    let result = number;
    while (pow > 1) {
        pow--;
        result*=number;
    }
    return result;
}

const getCorrectName = (name) => name && typeof name ==='string' ? name[0].toUpperCase()+name.slice(1) : `Некоректний тип даних : ${name}`;


const getCleanSallary = (sallary, tax1, tax2) => Math.round(sallary*(1-(tax1+tax2)/100));
  


const randomNumber = (m, n) =>  Math.round(Math.random()*(n-m)+m);


const countLetter = (letter, word) => word.toLowerCase().split(letter).length-1;


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

const getRandomPassword = (n=8) => randomNumber(getPow(10,n-1), getPow(10,n)-1);


const deleteLetters =(letter, word) => word.split(letter).join('');
const deleteLetters1 = (letter, word) => word.replaceAll(letter,'');

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
console.log('(deleteDuplicateLetter for "Бісквіт був дуже ніжним" : ', deleteDuplicateLetter("Бісквіт був дуже ніжним"));
console.log(getRandomPassword);
// console.log('is Palyndrom ',isPalyndrom('ababagalamaga'), isPalyndrom1('ababa'));
//console.log(deleteLetters('a','blablabla' ), deleteLetters1('a', 'blablabla'));
console.log(getRandomPassword(3));
//window.alert(convertCurrency('100uah'));
//window.alert(countLetter("а", "Асталавіста"));
//window.alert( randomNumber(10, 4));
//window.alert(getCleanSallary(1000, 18, 1.5));
//window.alert(getCorrectName(11111));
// window.alert(getMaxDigit1('1234569'));
// window.alert(getPow(4,4));




