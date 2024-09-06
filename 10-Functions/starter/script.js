'use strict';

const bookings = [];

const createBooking = function (

  flightNum,
>>>>>>> egers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
<<<<<<< Updated upstream
    fightNum,
=======
    flightNum,
>>>>>>> Stashed changes
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
<<<<<<< Updated upstream
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

//129
const flight = 'LH234';
const jonas = {
  name: 'Robin Chen',
  passport: 8956485693,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr ' + passenger.name;

  if (passenger.passport === 8956485693) {
    console.log('Check in');
  } else {
    console.log('Wrong passport!');
=======
createBooking('LH123', 3);
createBooking('LH123', undefined, 3);

const flight = 'LH234';
const jonas = {
  name: 'robin chen',
  password: 12345678,
};
const jonasArr = ['Ray', 'Robin'];

const checkIn = function (flightNum, passengers, passengersArr) {
  flightNum = 'LH999';
  passengers.name = 'Mr ' + passengers.name;
  //passengersArr.push('1');

  if (passengers.password === 12345678) {
    console.log('Check in');
  } else {
    ('Wrong passport!');
>>>>>>> Stashed changes
  }
};

checkIn(flight, jonas);
console.log(flight, jonas);

<<<<<<< Updated upstream
let flightNum = flight;
const passenger = jonas;
flightNum = 'LH888';
console.log(flightNum, flight, passenger);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

//131
//Is the same as doing...
const flightNum1 = flight;
const passenger1 = jonas;
console.log(flightNum1, passenger1);

//131 Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};


//132
//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed sstring: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

const high5 = () => {
  console.log('~~');
};
['Ivy', 'Ray', 'Robin'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Robin');

greet('hello')('ivy');

//arrow
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('hello')('ray');

//133 the call and apply method

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(236, 'Robin Chen');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'javascript',
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
