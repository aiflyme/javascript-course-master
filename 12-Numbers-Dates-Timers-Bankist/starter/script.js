'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const nowDate = new Date(acc.movementsDates[i]);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const displayDate =
      `${nowDate.getDate()}`.padStart(2, 0) +
      '/' +
      `${nowDate.getMonth() + 1}`.padStart(2, 0) +
      '/' +
      nowDate.getFullYear() +
      ',' +
      `${nowDate.getHours()}`.padStart(2, 0) +
      ':' +
      `${nowDate.getMinutes()}`.padStart(2, 0);

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
       <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov}</div> 
        </div>

      `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  const balance = formatCur(acc.balance, acc.locale, acc.currency);

  labelBalance.textContent = `${balance}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  const incomesFormat = formatCur(incomes, acc.locale, acc.currency);
  labelSumIn.textContent = `${incomesFormat}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  const outFormat = formatCur(Math.abs(out), acc.locale, acc.currency);
  //console.log(out, outFormat);
  labelSumOut.textContent = `${outFormat}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  const interestFormat = formatCur(interest, acc.locale, acc.currency);
  labelSumInterest.textContent = `${interestFormat}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = () => {
  const tick = () => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    labelTimer.textContent =
      `${min}`.padStart(2, 0) + ':' + `${sec}`.padStart(2, 0);
    //In each call, print the remaining time to UI

    //When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    time--;
  };
  //Set time to 5 minutes
  let time = 30;

  //Call the timer every second
  //tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//FAKE ALWASY LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

const nowDate = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'short', //short long
  year: 'numeric', //2-digit
  weekday: 'long',
};

const locale = navigator.language;
console.log(locale);
const formatDate =
  `${nowDate.getDate()}`.padStart(2, 0) +
  '/' +
  `${nowDate.getMonth() + 1}`.padStart(2, 0) +
  '/' +
  nowDate.getFullYear() +
  ',' +
  nowDate.getHours() +
  ':' +
  nowDate.getMinutes();
// console.log(nowDate, formatDate);
labelDate.textContent = formatDate;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //startLogOutTimer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    // Update UI
    updateUI(currentAccount);

    //experimenting API  //'en-US' 'en-GB'
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(nowDate);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);

    //Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);
      //Add Date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      //Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//170 Converting and Checking Numbers

console.log(23 === 23.0);

console.log(0.1 + 0.2);

//Conversion
console.log(Number('23'), +'23', Number.parseInt(+'30.03s'));

//Parsing
console.log(Number.parseInt('  30.01px  ', 10));
console.log(Number.parseInt('e30.01px'));
console.log(Number.parseFloat('  30.03s1px  '));

console.log(Number.isNaN('30'));
console.log(Number.isNaN(+'30.03s'));

console.log(Number.isFinite(20));

console.log(Number.isInteger(23.1));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23.0 / 0));
console.log(Number.isInteger(0 / 23.0));

//171 Math and Rounding
console.log(Math.sqrt(25), 25 ** 0.5);
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, '22', 4, 11));
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));
console.log(Math.round(23.3), Math.round(23.9));

//toFixed turn string
console.log((2.8).toFixed(0), (2.2).toFixed(0));
console.log(+(2.8).toFixed(2));

//172 The Remainder Operator
console.log(5 % 2);
console.log(5 / 2);
console.log(8 % 3);

const isEven = n => n % 2 === 0;
console.log(isEven(6));

console.log(document.querySelectorAll('.movements__row'));
labelBalance.addEventListener('click', () => {
  document.querySelectorAll('.movements__row').forEach((row, i) => {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

//173 Numberic Separators
const diameter = 287460000000;
console.log(diameter);
const priceCents = 346_99;
console.log(priceCents);

const transferFee1 = 15_00;
const transferFee2 = 15_00;

console.log(transferFee1, transferFee2);

//174 Working with BigInt
console.log(2 ** 53 - 1); //9_ 007_199_254_740_991
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(2 ** 53 + 1); //wrong

console.log(49561238946651231238956456123233n); //bigInt
console.log(BigInt(49561238946651231238956456123233));

//Operations
console.log(10000n + 10000n);

//wrong
// console.log(Math.sqrt(16n));

const huge = 23432543456546565443534986754n;
const num = 99;
//error
// console.log(huge * num);
console.log(huge * BigInt(num));
console.log(20n > 15); //true
console.log(20n === 20); //false
console.log(20n == 20); //true
console.log(typeof 20n);

console.log(huge + ' is REALLY big !!!');
console.log(11n / 3n);
console.log(11 / 3);

//175 Creating Dates
//Create a date
const now = new Date();
console.log(now);
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(3 * 24 * 60 * 60 * 1000));

//Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.toISOString());

console.log(future.getTime()); //2142228180000
console.log(new Date(2142228180000));

//177 Operations With Dates
console.log(+future);

const calcDaysPassed = (date1, date2) => date2 - date1;
const days1 = calcDaysPassed(new Date(), future);
console.log(days1);

//179 Internationalizing Numbers (Intl)

const options149 = {
  style: 'currency', //'unit'
  unit: 'celsius', //'mile-per-hour',
  currency: 'EUR',
  // useGrouping: false,
};
const num179 = 3884767.23;
console.log(new Intl.NumberFormat('en-US', options149).format(num179));
console.log(new Intl.NumberFormat('de-DE', options149).format(num179));
console.log(new Intl.NumberFormat('ar-SY', options149).format(num179));
console.log(new Intl.NumberFormat(navigator.language).format(num179));

//180 Timers_setTimeout and setInterval
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} `),
  2000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//setTimeout
setTimeout(() => {
  const now = new Date();
  console.log(now);
}, 1000);

setInterval(() => {
  const now = new Date();
  console.log(now);
}, 1000000);
