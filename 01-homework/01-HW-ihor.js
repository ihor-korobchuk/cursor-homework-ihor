console.log("First homework");
//console.log("I have changed my homework");
//Оголошуємо змінні
const cat=15.678;
const cow=123.965;
const dog=90.2345;
console.log("cat weight=", cat);
console.log("cow weight=", cow);
console.log("dog weight=", dog);

//Знаходимо мах і мін
let max=Math.max(cat, dog, cow);
let min=Math.min(cat, dog, cow);
console.log("Maximum=", max);
console.log("Minimum=", min);

//Знаходимо суму
let summ = cat+dog+cow;
console.log("Summ=", summ);

//Відкидуємо копійки і складаємо цілу частину
let CostOffCentCat=Math.floor(cat);
let CostOffCentCow=Math.floor(cow);
let CostOffCentDog=Math.floor(dog);
let SummOffCent=CostOffCentCat+CostOffCentCow+CostOffCentDog;
console.log("SummOffCent=", SummOffCent);

//Вивести суму округлену до сотень
let SummRound100=Math.ceil(summ, 3)
console.log("Round to 100=", SummRound100);

//Вивести чи є число парним


//Вивести суму решти при оплаті 500
let change=Math.ceil((500-summ),2);
console.log("Your change from 500=", change);

//Вивести середнє значення округлене до другого знаку
let average=Math.ceil((cat+dog+cow)/3,2);
console.log("Average =", average)

//Створити змінну з випадковою знижкою Math.random
let discont=Math.random();
console.log("Your discount=",discont*100, "%");

//

