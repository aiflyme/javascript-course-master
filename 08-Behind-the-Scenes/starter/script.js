'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName} are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';

      //block scope
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      //block scope
      const output = 'NEW OUTPUT!';
    }
    //function scope
    console.log(millenial);
    //block scope . wrong
    //add(2, 3);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

//{}
console.log(this);

//undefined
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  console.log(this);
}
calcAge1(1991);

const calcAgeArrow = birthYear => {
  const age = 2037 - birthYear;
  console.log(age);
  console.log(this);
};

calcAgeArrow(1983);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(this.year - 1);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
//f();

var lastName = 'Robin';

const jonas1 = {
  lastName: 'Ivy',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(this.year - 1);

    //resolution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1980);
    // };

    //resolution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1980);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.lastName}`);
  },
};
jonas1.greet();
jonas1.calcAge();

//Primitive types
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

//Reference types
const me = { name: 'Robin', age: 30 };
const friend = me;
friend.age = 40;
console.log('me:', me);
console.log('friend:', friend);

// Copying objects
const robin1 = { name: 'Robin', age: 30, family: ['Ivy', 'Ray'] };
const robin2 = Object.assign({}, robin1);
robin2.age = 40;
robin2.family.push('Colin');
console.log(robin1, robin2);
