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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (v, k) {
    const type = v > 0 ? 'deposit' : 'withdrawal';
    const html = `
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
// displayMovements(account1.movements);

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

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

// calcPrintBalance(account1.movements);

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

const calcDisplaySummary = function (movements, interestRate) {
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
    .map(deposit => (deposit * interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = interest + `€`;
};
// calcDisplaySummary(account1.movements);

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
const updateUI = acc => {
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcPrintBalance(acc);
  //Display summary
  calcDisplaySummary(acc.movements, acc.interestRate);
};

let currentAccount;

btnLogin.addEventListener('click', e => {
  //Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Dispaly UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    updateUI(currentAccount);
  }
});

//159 Implementing Transfers
btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //update UI
    updateUI(currentAccount);
  }
});

//160 The findIndex Method
btnClose.addEventListener('click', e => {
  e.preventDefault();

  const deleteAccount = accounts.find(
    acc => acc.username === inputCloseUsername.value
  );

  if (
    deleteAccount?.username === currentAccount.username &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);

    //Hide UI

    containerApp.style.opacity = 0;
    inputClosePin.value = inputCloseUsername.value = '';
  }
});

//161 some and every

//includes equality
console.log(movements.includes(-130));

//some condition
const anyDeposits = movements.some(mov => mov > 3000);
console.log(anyDeposits);

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);

    inputLoanAmount.value = '';
  }
});

//every
console.log(movements.every(mov => mov !== 0));

//separate callback
const deposit = mov => mov < 0;
console.log(movements.every(deposit));
console.log(movements.some(deposit));
console.log(movements.filter(deposit));

//162 flat and flatMap
const arr162 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr162.flat());

const arrDeep162 = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep162.flat(2)); //argument level number

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

const overalBalancePipe = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalancePipe);

//flatmap
const overalBalancePipe2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalancePipe2);

//163 Sorting Arrays

//string
const owners = ['Robin', 'Ivy', 'Colin', 'Ray'];
console.log(owners.sort());
console.log(owners);

//numbers
console.log(movements);
// console.log(movements.sort((a, b) => a - b));

let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);

  sorted = !sorted;
});

//copy js
// const ms = movements.slice();
// ms[0] = 1;
// console.log(ms, movements);

//164 More Ways of Creating and Filling Arrays
const x = new Array(7);

console.log(x.map(() => 5));
x.fill(1, 3, 5);
console.log(x);

//Array.from
const arrs164 = Array.from({ length: 5 }, () => new Array(6));
const arrs1642 = Array.from({ length: 5 }, () => 1);

console.log(arrs164, arrs1642);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', () => {
  const movementUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementUI);

  const movementUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementUI2);
});

//166 Array Methods Practice
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

//2。
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  //.filter(mov => mov >= 1000).length;
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

//3.
const { depositss, withdrawalss } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? 'depositss' : 'withdrawalss'] += cur;
      return sums;
    },
    //    {
    //   cur > 0 ? (sums.depositss += cur) : (sums.withdrawalss += cur);
    //   return sums;
    // },
    { depositss: 0, withdrawalss: 0 }
  );

console.log(depositss, withdrawalss);

//4.
const covertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const arr = title
    .toLowerCase()
    .split(' ')
    //.filter(word => )
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    );
  return arr.join(' ');
  //console.log(arr);
};
console.log(covertTitleCase('this is a nice title'));
console.log(covertTitleCase('this is a LONG nice title but not too long'));
console.log('this'.substring(0, 1));
const expections = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
console.log(expections.includes('a'));
//167 Cod
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:



GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

//2
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
const sarahDogFood =
  sarahDog.curFood > sarahDog.weight ** 0.75 * 28 ? 'Too much' : 'Too little';
console.log(sarahDogFood);

//3
let ownersEatTooMuch = [],
  ownersEatTooLittle = [];
[ownersEatTooMuch, ownersEatTooLittle] = dogs.flatMap(dog => {
  if (dog.curFood > dog.weight ** 0.75 * 28) ownersEatTooMuch.push(dog.owners);
  else ownersEatTooLittle.push(dog.owners);

  return [ownersEatTooMuch, ownersEatTooLittle];
});

console.log(ownersEatTooMuch.flat(), 222, ownersEatTooLittle.flat());

//4
const clOwnersEatTooMuch =
  ownersEatTooMuch.flat().join(' and ') + `'s dogs eat too much!`;
const clOwnersEatTooLittleh =
  ownersEatTooMuch.flat().join(' and ') + `'s dogs eat too little!`;
console.log(clOwnersEatTooMuch, clOwnersEatTooLittleh);

//5
const exactlyFood = dogs.some(rf => rf.curFood === rf.weight ** 0.75 * 28);
console.log(exactlyFood);

//6
const okFood = dogs.some(
  rf =>
    rf.curFood >= rf.weight ** 0.75 * 28 * 0.9 &&
    rf.curFood < rf.weight ** 0.75 * 28 * 1.1
);
console.log(okFood);

//7
const okDog = dogs.filter(
  rf =>
    rf.curFood >= rf.weight ** 0.75 * 28 * 0.9 &&
    rf.curFood < rf.weight ** 0.75 * 28 * 1.1
);
console.log(okDog);

//8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
const newDog = Array.from(dogs);
console.log(newDog, dogs);
newDog.sort((a, b) => a.weight - b.weight);
console.log(newDog, dogs);
