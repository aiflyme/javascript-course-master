'use strict';

let conVar;
var varVar;
const vars = 2;
console.log(conVar, varVar, varVar2);

var varVar2;
let convar = 3;
var varVar = 2;

console.log(conVar, varVar);
const test2 = testA(3, 5);
console.log(test2);

const a = 100;
let b = 100;
function testA(a, b) {
  // const a = 100;
  // console.log(a, b);
  // b += 100;
  // console.log(b);
  return a + b;
}
console.log(b);
// testA();
console.log(b);

console.log(testB);

var testB = (a, b) => {
  return a + b;
};

console.log(testB(2, 3));

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // const firstName = 'ivy';
  // console.log(firstName);
  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // console.log(add(2, 3));
  }
  printAge();

  return age;
}

const firstName = 'Robin';
calcAge(1983);

//hosting

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Robin';
let job = 'teacher';
const year = 1991;

//hoisting function
console.log(addDecl(3, 5));
// console.log(addExpr(3, 6));
// console.log(addArrow(3, 7));
console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}

let addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

console.log(addExpr);

//this keyword
console.log(this);

const calcAge1 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge1(1983);

const calcAge1Arrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge1Arrow(1983);

const jonas = {
  firstName: 'Robin',
  year: 1983,

  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    //Solution 1
    // using self
    self = this;
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();

    //Solution 2
    //Arrow function
    const isMillenial2 = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial2();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.calcAge();
jonas.greet();

const f = jonas.calcAge();

const addExpr2 = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr2(3, 4, 5, 6);

const addArrow2 = (a, b) => {
  // console.log(arguments);
  return a + b;
};
addArrow2(3, 4, 5, 6);

let age = 30;
let oldAge = age;
age = 31;
console.log(oldAge, age);

const me2 = {
  name: 'Robin',
  age: 30,
};

const friend = me2;
friend.age = 20;
console.log(friend, me2);
//error f is not a function
// f();

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alica', 'Bob'],
};

//just affect first level
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Chen';

jessicaCopy.family.push('Mary', 'Ray');

//the family is the same
console.log(jessica2);
console.log(jessicaCopy);

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName} are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven';

//       //block scope
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//       //block scope
//       const output = 'NEW OUTPUT!';
//     }
//     //function scope
//     console.log(millenial);
//     //block scope . wrong
//     //add(2, 3);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// //{}
// console.log(this);

// //undefined
// function calcAge1(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(this);
// }
// calcAge1(1991);

// const calcAgeArrow = birthYear => {
//   const age = 2037 - birthYear;
//   console.log(age);
//   console.log(this);
// };

// calcAgeArrow(1983);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(this.year - 1);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// //f();

// var lastName = 'Robin';

// const jonas1 = {
//   lastName: 'Ivy',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(this.year - 1);

//     //resolution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1980);
//     // };

//     //resolution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1980);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.lastName}`);
//   },
// };
// jonas1.greet();
// jonas1.calcAge();

// //Primitive types
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// //Reference types
// const me = { name: 'Robin', age: 30 };
// const friend = me;
// friend.age = 40;
// console.log('me:', me);
// console.log('friend:', friend);

// // Copying objects
// const robin1 = { name: 'Robin', age: 30, family: ['Ivy', 'Ray'] };
// const robin2 = Object.assign({}, robin1);
// robin2.age = 40;
// robin2.family.push('Colin');
// console.log(robin1, robin2);
