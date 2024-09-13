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

//150 The map method
const movements150 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
// const movements150USD = movements150.map(function (mov) {
//   return (mov *= eurToUsd);
// });
const movements150USD = movements150.map(mov => mov * eurToUsd);
console.log(movements150);
console.log(movements150USD);

const movementsDesc150 = movements150.map(function (v, i, arr) {
  if (v > 0) {
    return `Movement ${i + 1}: You deposited ${v}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(v)}`;
  }
});
console.log(movementsDesc150);

//151 Computering usernames
const user = 'Steven Thomas Williams'; //stw
const createUsername = users => {
  users.forEach(user => {
    user.username = user.owner
      .toLowerCase()
      .split(' ')
      .map(v => v[0])
      .join('');
  });
  //return users;
};
createUsername(accounts);
console.log(accounts);

//152 filter
//test with map return true or false
const depositsMap = movements.map(function (value) {
  return value > 0;
});

const deposits = movements.filter(function (value) {
  return value > 0;
});
console.log(depositsMap);
console.log(deposits);
const withdrawals = movements.filter(value => value < 0);
console.log(withdrawals);

//153 reduce
const balance = movements.reduce((acc, cur, i, arr) => {
  console.log(acc, cur);
  return (acc += cur);
}, -5000);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
};

calcPrintBalance(account1.movements);

//Maximum value
let maxNum = 0;
const max = movements.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
console.log(max);

//154 Challenge #2
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = function (data) {
  const arr = [];

  const humanAge = data.map(
    v => (v <= 2 ? 2 * v : 16 + v * 4)
    //arr.push(humanAge);
  );

  //console.log(humanAge);
  const adults = humanAge.filter(v => {
    return v >= 18;
  });
  // const avgDogsAge = adults.reduce((acc, v) => acc + v, 0) / adults.length;
  console.log(adults);
  const avgDogsAge = adults.reduce((acc, v, i, arr) => acc + v / arr.length, 0);

  return avgDogsAge;
};

const calcAverageHumanAgePipeline = data =>
  data
    .map(v => (v <= 2 ? 2 * v : 16 + v * 4))
    .filter(v => v >= 18)
    .reduce((acc, v, i, arr) => acc + v / arr.length, 0);

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];
const dataRs1 = calcAverageHumanAge(data1);
const dataRs2 = calcAverageHumanAge(data2);
const dataPipeRs1 = calcAverageHumanAgePipeline(data1);
const dataPipeRs2 = calcAverageHumanAgePipeline(data2);
console.log(dataRs1, dataRs2);
console.log(dataPipeRs1, dataPipeRs2);

//155 The Magic of Chaining Methods
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = incomes + ` €`;

  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = Math.abs(outcomes) + `€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = interest + `€`;
};
calcDisplaySummary(account1.movements);

//156 Challenge #3
const calcAverageHumanAgePipelines = data =>
  data
    .map(v => (v <= 2 ? 2 * v : 16 + v * 4))
    .filter(v => v >= 18)
    .reduce((acc, v, i, arr) => acc + v / arr.length, 0);

//157 the find method
const findRs = movements.find(mov => mov < 0);
console.log(findRs); // one element

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

//158 Implementing login
