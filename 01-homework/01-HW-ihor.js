console.log("First homework");
//console.log("I have changed my homework");
//Оголошуємо змінні
const priceCat=15.678;
const priceCow=123.965;
const priceDog=90.2345;
console.log("cat =", priceCat);
console.log("cow =", priceCow);
console.log("dog =", priceDog);

//Знаходимо мах і мін
const maxPrice=Math.max(priceCat, priceDog, priceCow);
const minPrice=Math.min(priceCat, priceDog, priceCow);
console.log("Maximum=", maxPrice);
console.log("Minimum=", minPrice);

//Знаходимо суму
const priceSumm = priceCat+priceDog+priceCow;
console.log("Summ=", priceSumm);

//Відкидуємо копійки і складаємо цілу частину
const summOffCent=(Math.floor(priceCat)+Math.floor(priceCow)+Math.floor(priceDog));
console.log("SummOffCent=", summOffCent);

//Вивести суму округлену до сотень
const roundPrice=Math.round(priceSumm / 100) * 100;
console.log("RoundPrice=",roundPrice);



//Вивести чи є число парним
const priceSummPairOrNot=priceSumm%2===0;
console.log("dog cost pair?", priceSummPairOrNo);

//const catPart=costOffCentCat%2===0;
//const cowPart=costOffCentCow%2===0;
//const dogPart=costOffCentDog%2===0;
//console.log("cat cost pair?", catPart);
//console.log("cow cost pair?", cowPart);
//console.log("dog cost pair?", dogPart);

//Вивести суму решти при оплаті 500
const cash=500;
const change=((cash-priceSumm).toFixed(2));
console.log("Your change=", change);

//Вивести середнє значення округлене до другого знаку
const average=((priceSumm/3).toFixed(2));
console.log("Average =", average)

//Створити змінну з випадковою знижкою Math.random
const discont=Math.random()*100;
discont=Math.floor(discont);
console.log("Your discount=",discont, "%");

//

