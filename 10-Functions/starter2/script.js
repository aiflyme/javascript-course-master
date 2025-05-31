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
