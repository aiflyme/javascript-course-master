'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

//142 Simple Array Methods
console.log('### 142 Simple Array Methods');

//slice

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(1, 3));
console.log(arr.slice(-3, -1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log(...arr);

//splice     delete from arr
console.log(arr.splice(1, 2));
arr.splice(-1);
console.log(arr);
//reverse
let arr2 = ['a', 'b', 'c', 'd', 'e'];

console.log(arr2.reverse());
console.log(arr2);

//concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//join
console.log(letters.join(' - '));

//143 The new at Methods
const arr143 = [23, 11, 64];
console.log(arr143.at(2));

//getting last array element
console.log(arr143.slice(-1)[0]);
console.log(arr143.at(-1));

console.log('robinchen'.at(-1));

//144 looping arrays foreach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [index, value] of movements.entries()) {
  //keys() , values()
  console.log(index, value);
}

movements.forEach(function (value, key, array) {
  if (value === array.at(key)) console.log(true);
  //console.log(key, value, array);
});

//135 foreach with maps and sets
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//map
currencies.forEach(function (value, index, map) {
  console.log(index, value);
});

//set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, index, set) => {
  console.log(index, value, set);
});

//146 bankist app
//147 creating dom elements

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  let html = '';
  movements.forEach(function (v, k) {
    const type = v > 0 ? 'deposit' : 'withdrawal';
    html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      k + 1
    } ${type} </div>
          <div class="movements__date">${k + 1} days ago</div>
          <div class="movements__value">${v}</div>
        </div>
        `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
  //containerMovements.innerHTML = html;
};
displayMovements(account1.movements);

//148 Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
let juliaDogs = [3, 5, 2, 12, 7];

juliaDogs.splice(0, 1);
console.log(juliaDogs);
juliaDogs.splice(-2);
console.log(juliaDogs);

// console.log([3, 5, 2, 12, 7].splice(1));
// console.log([3, 5, 2, 12, 7].splice(-2));
const checkDogs = function (juliaDogs, kateDogs) {
  //remove the cat ages from that copied array
  const juliaRightDogs = juliaDogs.slice();
  juliaRightDogs.splice(0, 1);
  juliaRightDogs.splice(-2);
  //const juliaRightDogs = juliaDogs.slice(1, 3);

  //Create an array with both Julia's (corrected) and Kate's data
  const allDogs = [...juliaRightDogs, ...kateDogs];

  //loop
  allDogs.forEach(function (v, i) {
    const type = v >= 3 ? 'adult' : 'puppy 🐶';

    console.log(
      `it's an ${type} ("Dog number ${
        i + 1
      } is an adult, and is ${v} years old ")`
    );
  });
};

const juliaDogs1 = [3, 5, 2, 12, 7];
const KateDogs1 = [4, 1, 15, 8, 3];
const juliaDogs2 = [9, 16, 6, 8, 3];
const KateDogs2 = [10, 5, 6, 1, 4];
checkDogs(juliaDogs1, KateDogs1);
checkDogs(juliaDogs2, KateDogs2);

//149 MAP FILETER REDUCE

const reduceEx = [3, 5, 2, 12, 7].reduce(function (prev, cur, index, arr) {
  return prev + cur;
}, 11); //11 is initial value
console.log(reduceEx);
