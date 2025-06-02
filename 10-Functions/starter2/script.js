'use strict';
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 100 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
};

createBooking('LH123');
createBooking('LH124', undefined, 200);

createBooking('LH125', 2, 200);

//129 How passing argments works value vs reference

const flight = 'LH333';
const robin = {
  name: 'Robin Chen',
  passport: 4563218956,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LG999';
  passenger.name = 'Mr ' + passenger.name;

  if (passenger.passport === 4563218956) {
    console.log('Checked In');
  } else {
    console.log('Wrong passport');
  }
};

checkIn(flight, robin);
console.log(flight, robin);

const checkInDouble = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

checkInDouble(robin);
checkIn(flight, robin);
console.log(robin);

//130 First-class and higher-order Functions
//131 Funcions accepting callback functions
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const UpperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

//high-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Thansformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best', UpperFirstWord);
transformer('Javascript is the best', oneWord);

//132 Functions returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name} `);
  };
};
const greetHi = greet('Hi');
greetHi('Robin');

greet('Hi')('Ivy');

const greetArrow = greeting => name => console.log(`${greeting} ${name} `);

//133 The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum},name` });
  },
};

lufthansa.book(239, 'Robin Chen');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
//the first argument means this
book.call(eurowings, 233, 'Ivy Mo');
book.apply(eurowings, [233, 'Ivy Mo']);
book.call(eurowings, ...[233, 'Ivy Mo']);

//134 The bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(233, 'Ray Chen');
bookLH(233, 'Ray Chen');

const bookEW23 = book.bind(eurowings, 23, 'Ivy Mo');
bookEW23('Colin Chen');

//with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

//135 Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?



GOOD LUCK 😀
*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.question}\n ${this.options.join('\n')}`)
    );
    console.log(typeof answer);
    typeof answer === 'number' &&
      answer < this.answers.length &&
      answer >= 0 &&
      this.answers[answer]++;

    // console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

//136 Immediately Invoked function expressions
const runOnce = function () {
  console.log('This is just run once');
};
runOnce();

//just run once, cann't call.
(function () {
  console.log('This normal function just run once');
})();

() => console.log('This arrow function just run once');

//137 Closures
const secureBooking = function () {
  let passagerCount = 0;

  return function () {
    passagerCount++;
    console.log(`${passagerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

//138 More closure examples
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 77;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

h();
f();
console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There re 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 1000;

boardPassengers(180, 3);

//139 Coding challenge #2
/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');

  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
