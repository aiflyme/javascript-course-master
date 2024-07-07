"use strict";

// let hasriversLicense = false;
// const passTest = true;
// //1.get error is variable don't define
// //hasriverLicense is not defined
// if (passTest) hasriverLicense = true;
// if (hasriversLicense) console.log("I can drive :D");

// //2.can't use reserved word
// //Unexpected strict mode reserved word
// const interface = "Audio";
// const private = 543;

//Function declaration
const robin = caclAge1(1983);
console.log(robin);

function caclAge1(birthYear) {
  const age = new Date().getFullYear() - birthYear;
  return age;
}

//Function Expression
const caclAge2 = function (birthYear) {
  const age = new Date().getFullYear() - birthYear;
  return age;
};
const colin = caclAge2(2010);

console.log(colin);

const caclAge3 = (birthYear) => new Date().getFullYear() - birthYear;
const ray = caclAge3(2016);

console.log(ray);

// const yearsUntilRetireMent = (birthYear) => {
//   const age = new Date().getFullYear() - birthYear;
//   return 65 - age;
// };
// const robinRetirement = yearsUntilRetireMent(1983);

// console.log(robinRetirement);

//
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangesPieces} oranges.`;
  return juice;
}

const juice = fruitProcessor(2, 3);
console.log(juice);

//Reviewing Functions
const caclAge = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

const yearsUntilRetireMent = (birthYear) => {
  const age = caclAge(birthYear);
  return 65 - age;
};
const robinRetirement = yearsUntilRetireMent(1983);

console.log(robinRetirement);

//Challenge #1
const calcAverage = (scores1, scores2, scores3) => {
  return (scores1 + scores2 + scores3) / 3;
};

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolhins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgDolphins * 2 < avgKoalas) {
    console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log(
      `Dolhins score is ${avgDolphins}, Koalas score is ${avgKoalas}, `
    );
  }
}
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);

const friends = ["Steven", "Michael", "Peter"];
friends.push("Ray");
friends.unshift("Ivy");
console.log(friends);

friends.pop();
friends.shift();
console.log(friends);

//Challenge 02#
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    bill = bill * 0.15;
  } else {
    bill = bill * 0.2;
  }
  return bill;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

//Object
const jonas = {
  firstName: "Jonas",
  lastName: "Chen",
  birthYear: 1983,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  calcAge: function () {
    return 2037 - this.birthYear;
  },
};
console.log(jonas["job"]);
jonas.sex = "male";
console.log(jonas);

console.log(jonas.calcAge());
console.log(jonas["calcAge"]());

//Challenge #03
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};
console.log(mark.calcBMI(), john.calcBMI());
console.log(
  `${mark.fullName}'s BMI ${mark.calcBMI().toFixed(2)} is higher than ${
    john.fullName
  }'s ${john.calcBMI().toFixed(2)}`
);
