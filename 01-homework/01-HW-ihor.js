console.log("First homework");
//console.log("I have changed my homework");
//Оголошуємо змінні
const cat=15.678;
const cow=123.965;
const dog=90.2345;
console.log("cat =", cat);
console.log("cow =", cow);
console.log("dog =", dog);

//Знаходимо мах і мін
const max=Math.max(cat, dog, cow);
const min=Math.min(cat, dog, cow);
console.log("Maximum=", max);
console.log("Minimum=", min);

//Знаходимо суму
const summ = cat+dog+cow;
console.log("Summ=", summ);

//Відкидуємо копійки і складаємо цілу частину
let CostOffCentCat=Math.floor(cat);
let CostOffCentCow=Math.floor(cow);
let CostOffCentDog=Math.floor(dog);
let SummOffCent=CostOffCentCat+CostOffCentCow+CostOffCentDog;
console.log("SummOffCent=", SummOffCent);

//Вивести суму округлену до сотень
let RoundPrice=Math.round(summ / 100) * 100;
console.log("RoundPrice=",RoundPrice);



//Вивести чи є число парним
let CatPart=CostOffCentCat%2===0;
let CowPart=CostOffCentCow%2===0;
let DogPart=CostOffCentDog%2===0;
console.log("cat cost pair?", CatPart);
console.log("cow cost pair?", CowPart);
console.log("dog cost pair?", DogPart);

//Вивести суму решти при оплаті 500
let cash=500;
let change=((cash-summ).toFixed(2));
console.log("Your change=", change);

//Вивести середнє значення округлене до другого знаку
const average=((summ/3).toFixed(2));
console.log("Average =", average)

//Створити змінну з випадковою знижкою Math.random
let discont=Math.floor(Math.random());
discont=(discont)*100;
console.log("Your discount=",discont, "%");

//

