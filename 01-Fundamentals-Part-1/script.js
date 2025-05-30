//number string bool undefined null symbol bigint

let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

console.log(12 + 23 + 34 - 8);

console.log(js);

//change typeof variable
let JavaScriptIsFun = true;
console.log(JavaScriptIsFun);

console.log(typeof JavaScriptIsFun);

JavaScriptIsFun = "Yes!";
console.log(typeof JavaScriptIsFun);

//undefined
let year;
console.log(year);
console.log(typeof year);

console.log(null);
console.log(typeof null);

//let const var
let age = 30;
age = 31;

const birthYear = 1991;
// error
//birthYear=1990;
//const job;
console.log(isNaN(12 + 23 + 34 - 8), isNaN("d"));
console.log(NaN);
console.log(typeof NaN);

console.log(isFinite(10 / 1));
console.log(isFinite(10 / 0));
//Challenging 1
let marksMass = 78;
let marksHeight = 1.69;
let marskBMI = marksMass / marksHeight ** 2;
console.log(marskBMI);
let johnMass = 92;
let johnHeight = 1.95;
let johnBMI = johnMass / johnHeight ** 2;
console.log(johnBMI);

console.log(marskBMI > johnBMI);

marksMass = 95;
marksHeight = 1.69;
marskBMI = marksMass / marksHeight ** 2;

johnMass = 85;
johnHeight = 1.76;
johnBMI = johnMass / johnHeight ** 2;

console.log(marskBMI > johnBMI);

//Challenging 2
if (marskBMI > johnBMI) {
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console.log(`John's BMI is higher than Mark's!`);
}
console.log(marskBMI, johnBMI);
console.log(
  `Mark's BMI (${marskBMI.toFixed(2)}) is higher than john's (${johnBMI.toFixed(
    3
  )})`
);

const inputYear = 1991;
//number + string -> string
console.log(inputYear + 11);

console.log(typeof (inputYear + 11));
console.log("inputYear" + 11);
console.log(typeof ("inputYear" + 11));

const s = 0b10;
const n = 0o755;
const h = 0x755;

console.log(s, n, h);

//NaN
console.log(Number("Jonas"));
//NaN
console.log(typeof NaN);

//type coercion
console.log("I am " + 23 + " years old");
console.log("I am " + String(23) + " years old");

//challenging 3
const doplhins = (96 + 108 + 89) / 3;
const koalas = (88 + 91 + 110) / 3;

if (doplhins > koalas) console.log(`doplhins win the game`);
else if (koalas > doplhins) {
  console.log(`koalas win the game`);
}

// Bouns1
const doplhinsBouns1 = (97 + 112 + 101) / 3;
const koalasBouns1 = (109 + 95 + 123) / 3;

if (doplhinsBouns1 > koalasBouns1 && doplhinsBouns1 >= 100)
  console.log(`doplhins win the game`);
else if (koalasBouns1 > doplhinsBouns1 && koalasBouns1 >= 100) {
  console.log(`koalas win the game`);
} else {
  console.log("No one wins the game!");
}

// Bouns2
const doplhinsBouns2 = (97 + 112 + 101) / 3;
const koalasBouns2 = (109 + 95 + 106) / 3;

if (doplhinsBouns2 > koalasBouns2 && doplhinsBouns2 >= 100)
  console.log(`doplhins win the game`);
else if (koalasBouns2 > doplhinsBouns2 && koalasBouns2 >= 100) {
  console.log(`koalas win the game`);
} else {
  console.log("No one wins the game!");
}

const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

const totalBill1 =
  bill1 <= 300 && bill1 >= 50 ? bill1 + bill1 * 0.15 : bill1 + bill1 * 0.2;
const totalBill2 =
  bill2 <= 300 && bill2 >= 50 ? bill2 + bill2 * 0.15 : bill2 + bill2 * 0.2;
const totalBill3 =
  bill3 <= 300 && bill3 >= 50 ? bill3 + bill3 * 0.15 : bill3 + bill3 * 0.2;

console.log(totalBill1);
console.log(totalBill2);
console.log(totalBill3);
