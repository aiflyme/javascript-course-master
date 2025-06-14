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
  containerMovements.innerHTML = '';
  movements.forEach((mov, index) => {
    const deposit_type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${deposit_type}">${
      index + 1
    } ${deposit_type}</div>
          
          <div class="movements__value">${mov}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
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

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = function (first, second) {
  const correctDogs = first.slice(1, -2).concat(second);
  console.log(first);
  correctDogs.forEach((dog, i) => {
    if (dog >= 3) console.log(`Dogs number ${i + 1} is ${dog} years old`);
    else console.log(`Dogs number ${i + 1} is still a puppy 🐶`);
  });
};

checkDogs(dogsJulia, dogsKate);
checkDogs(dogsJulia2, dogsKate2);

//150 The map Method
const eurToUsd = 1.1;
const movementsUsd = movements.map(mov => {
  return mov * eurToUsd;
});
console.log(movements, movementsUsd);

const movementsDesc = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1} You deposited ${mov}}`;
  } else {
    return `Movement ${i + 1} You withdrew ${mov}}`;
  }
});
console.log(movementsDesc);

//151 Computeing usernames
const user = 'Ivy Mo';
const createUsernames = accs =>
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
createUsernames(accounts);

console.log(accounts);

//152 The filter method
const calcDisplayBalance = function (movements) {
  const balancce = movements.reduce((acc, cur) => acc + cur);
  labelBalance.textContent = `${balancce} EUR`;
};
calcDisplayBalance(account1.movements);

const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

const balance = movements.reduce((acc, cur, i, arr) => {
  console.log(`Iteration ${i}: ${cur} ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

//get max number
const max = movements.reduce((acc, cur) => {
  if (acc > cur) return acc;
  else return cur;
});
console.log(max);
