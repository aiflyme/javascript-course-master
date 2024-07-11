// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = "23";

//Challenge #1
function printForecast(arrs) {
  let printContext = "";
  for (let i = 1; i <= arrs.length; i++) {
    printContext += arrs[i - 1] + " C in " + i + " days \n";
  }
  return printContext;
}

const arrs1 = [17, 21, 23];
const arrs2 = [12, 5, -5, 0, 4];

console.log(printForecast(arrs1));
console.log(printForecast(arrs2));
