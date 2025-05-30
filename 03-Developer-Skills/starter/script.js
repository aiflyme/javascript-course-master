// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// var let = 10;
// console.log(let);

// console.log(a); // Output: undefined
// var a = 5;

// console.log(b); // Error: Cannot access 'b' before initialization
// let b = 10;

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const me = new Person("Tyrone", "Jones");

console.table(me);

var vartest = "test1";
let lettest = "testlet1";
const x = "23";

//Challenge #1
function printForecast(arrs) {
  console.log(vartest);
  console.log(lettest);
  vartest = "test2";
  lettest = "testlet2";
  let printContext = "";
  for (let i = 1; i <= arrs.length; i++) {
    printContext += arrs[i - 1] + " C in " + i + " days \n";
  }
  return printContext;
}

console.log(vartest);
console.log(lettest);
const arrs1 = [17, 21, 23];
const arrs2 = [12, 5, -5, 0, 4];

console.log(printForecast(arrs1));
console.log(printForecast(arrs2));
