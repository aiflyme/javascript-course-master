'use strict';

//208 Constructor Functions and the new Operator

const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never to this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const robin = new Person('Robin', 1983);
console.log(robin);

//important
//1. New {} is created
//2. function is called, this={}
//3. {} linked to prototype
//4. function automatically return {}

//209 Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(robin.calcAge);

robin.calcAge();
console.log(robin.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(robin));
console.log(Person.prototype.isPrototypeOf(Person));

//.prototypeOfLinkedObjects
Person.prototype.species = 'Homo Sapiens';
console.log(robin);

//210 Prototypal inheritance and the prototype chain
//211 Prototypal Inheritance on Built-In Objects
console.log(robin.__proto__);
console.log(robin.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 6, 6, 8, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
//__proto
//[object HTMLHeadingElement] <- HTMLElement <- Element <- Node <- EventTarget <-Object

//212 Codeing challenge 01
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const bmw = new Car('BMW', 120);
bmw.accelerate();
bmw.brake();

const mercedes = new Car('Mercedes', 95);
mercedes.accelerate();
mercedes.brake();

//213 ES6 Classes

//class expression
// const PersonCl = class {};
//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Instance methods
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  //Static Methods
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const ivy = new PersonCl('ivy mo', 1982);
console.log(ivy);
ivy.calcAge();
console.log(ivy.age);

console.log(ivy.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
ivy.greet();

//1. Classes are NOT hoisted
//2. Class are first-class citizes
//3. classes are executed in strict mode

const ray = new PersonCl('ray chen', 2016);

const account = {
  owner: 'robin',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 500;
console.log(account.movements);

//215 Static Methods
PersonCl.hey();
//error, cannot be instance
// ray.hey();

//216 Object create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  hey() {
    console.log(`hey,${this.name}`);
  },

  heyFirstName() {
    console.log(`hey,${this.firstName}`);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const colin = Object.create(PersonProto);
console.log(colin);
colin.name = 'Colin';
colin.birthYear = 2010;
colin.calcAge();
colin.hey();

console.log(colin.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('sarah', 1999);
sarah.calcAge();

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarCl {
  constructor(speed, make) {
    this.speed = speed;
    this.make = make;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  x;

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
    console.log(this.speed, speed);
  }
}

const ford = new CarCl(120, 'Ford');
ford.accelerate();
ford.accelerate();
ford.brake();

const speedUS = ford.speedUS;
console.log(speedUS);
ford.speedUS = 130;

//218  Inheritance Between _Classes__ Constructor Functions
const PersonInheritance = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

PersonInheritance.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  //use Person instead redefine
  PersonInheritance.call(this, firstName, birthYear);

  this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

console.log(Student.prototype.constructor);
console.dir(Student.prototype.constructor);

// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const CarEv = function (speed, make, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

CarEv.prototype = Object.create(Car.prototype);

CarEv.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`charge to ${this.charge}%`);
};
CarEv.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const byd = new CarEv(100, 'byd', 80);
byd.accelerate();
byd.brake();
byd.chargeBattery(90);

console.log(byd.__proto__.__proto__);

//220 Inheritance Between _Classes__ ES6 Classes
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const john = new StudentCl('John Jones', 2012, 'Computer Science');

john.introduce();
john.calcAge();

// 221 Inheritance Between _Classes__ Object.create

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'ComputerScience');
jay.heyFirstName();
jay.calcAge();

// 222 Another Class Example
// 223 Encapsulation_ Protected Properties and Methods
// 224 Encapsulation_ Private Class Fields and Methods

// 1.Public fields
// 2.private fields
// 3.Public Methods
// 4.private Methods
//(there is  also the static version)

class Account {
  // 1.Public fields(instances)
  locale = navigator.language;

  // 2.Private fields(instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected
    // this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3.Public Methods
  //Public interface
  getMovements() {
    return this.#movements;
  }

  setMovements(movements) {
    this.#movements = movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requesLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  // 4.private Methods
  #approveLoan(val) {
    return true;
  }

  //static method
  static helper() {
    console.log(`helper`);
  }
}

const acc1 = new Account('Robin', ' EUR', 1111);
// acc1._movements.push(250);
// acc1._movements.push(-150);

acc1.deposit(250);
acc1.withdraw(150);
acc1.requesLoan(1000);
//private methods
// acc1.#approveLoan(1000);

console.log(acc1);
console.log(acc1._pin);

console.log(acc1.getMovements());
Account.helper();

// 225 Chaining Methods
acc1.deposit(300).deposit(500).withdraw(35).requesLoan(25000).withdraw(4000);

console.log(acc1.getMovements());
// 226 ES6 Classes Summary

// 227 Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class EVCl extends CarCl {
  #charge;

  constructor(speed, make, charge) {
    super(speed, make);
    this.#charge = charge;
  }

  brack() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`charge to ${this.#charge}%`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().chargeBattery(80);
rivian.speedUS = 200;
console.log(rivian.speedUS);
