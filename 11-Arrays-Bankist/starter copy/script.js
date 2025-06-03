'use strict';

/////////////////////////////////////////////////

//142 Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];
let str = '123456';
console.log(str.slice(1, 4));

console.log(arr.slice(3));
console.log(arr.slice(2, 3));
console.log(arr.slice(-3));
console.log(arr.slice(1, -1));

//SPLICE
console.log('SPLICE:');
// console.log(arr.splice(2));
console.log(arr.splice(-1));

console.log(arr);

//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
console.log([...arr, ...arr2].join(','));

//143 The new at method
console.log(arr[0]);
console.log(arr.at(0));

//getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log(str.at(0), str.at(-1));

//144 Looping arrays_forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [index, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`0${index + 1} You deposited ${movement}`);
  } else {
    console.log(`0${index + 1} You withdrew ${Math.abs(movement)}`);
  }
}

movements.forEach((movement, index, array) => {
  if (movement > 0) {
    console.log(`${index + 1} You deposited ${movement}`);
  } else {
    console.log(`${index + 1} You withdrew ${Math.abs(movement)}`);
  }
});

//145 foreach with maps and sets
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (cur, key, map) {
  console.log(`The key is ${key}, the currencies is ${cur}`);
});

//set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (cur, key, map) {
  console.log(`${key}, ${cur}`);
});

// const arrs = ['1', 1, true];
// console.log(arrs.slice(0, 2));
