console.log("First homework");
//Оголошуємо змінні
const priceCat=15.678;
const priceCow=123.965;
const priceDog=90.2345;
console.log("cat price=", priceCat);
console.log("cow price=", priceCow);
console.log("dog price=", priceDog);

//Знаходимо мах і мін
const maxPrice=Math.max(priceCat, priceDog, priceCow);
const minPrice=Math.min(priceCat, priceDog, priceCow);
console.log("Maximum price=", maxPrice);
console.log("Minimum price=", minPrice);

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
console.log("Summary price is Pair?", priceSummPairOrNot);

//Вивести суму решти при оплаті 500
const cash=500;
const change=Math.floor(cash-priceSumm);
+change.toFixed(2);
console.log("Your change=", change);

//Вивести середнє значення округлене до другого знаку
const average=Math.round(priceSumm/3);
+average.toFixed(2);
console.log("Average =", average)

//Створити змінну з випадковою знижкою Math.random
let discont=Math.random()*100;
discont=Math.floor(discont);
console.log("Your discount=",discont, "%");


