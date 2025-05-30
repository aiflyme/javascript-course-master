'use strict';

const [aa = 7, bb, cc = 10] = [8, 9];

console.log(aa, bb, cc);

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },

  //ES6 enhanced object literals
  openingHours,
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};

const menuNew = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuNew);

const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

let [first, , second] = restaurant.categories;
console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

const [starter, mainCorse] = restaurant.order(2, 0);
console.log(starter, mainCorse);

//Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//Object
const { name, openingHours: openingHours2, categories } = restaurant;
console.log(name, openingHours2, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu, starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
console.log(a, b);
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

//... Spread Operator
const arr1 = [7, 8, 9];
const newArr = [1, 2, ...arr1];
console.log(newArr);
console.log(...newArr);

console.log([...restaurant.mainMenu, 'Gnocci']);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu2 = [...newArr, ...mainMenuCopy];
console.log(menu2);
const menu3 = [];
menu3.push(...newArr);
menu3.push(...mainMenuCopy);
console.log(menu3);

//Iterables: arrays, strings, maps, sets, NOT objects
const str = 'robin';
const letters = [...str, '', 's.'];
console.log(letters);

//Not work in command line
// const ingredienets = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredienets);

// restaurant.orderPasta(...ingredienets);

//ES2018 WORK OBJECT
const newRestaurant = { ...restaurant, founder: 'Ivy' };
console.log(newRestaurant.founder);
console.log(restaurant, newRestaurant);

//DESTRUCTURING

//SPREAD , on RIGHT side of =
const arr2 = [1, 2, ...[3, 4]];

const [a1, b1, ...other] = [1, 2, 3, 4, 5];
console.log(a1, b1, other);

const [pizza, , risotto, ...other1] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(restaurant.mainMenu, restaurant.starterMenu);
console.log(pizza, risotto, other1);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add1 = function (...numbers) {
  console.log(Array.isArray(numbers));
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

console.log();
add1(1, 2, 3, 4, 5, 6, 7, 8);
add1(7, 6, 5, 4, 3, 2, 1);

restaurant.orderPasta('mushrooms', 'onion', 'olives', 'spinach');

console.log(undefined || null);
console.log(null || undefined);

//Nullish : null and undefined (NOT 0 or '')
restaurant.numGuests = 0;
const guests = restaurant.numGuests ?? 10;
console.log(guests);

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'La piazza',
  owner: 'Giovnni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1.numGuests, rest2.numGuests);

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1.numGuests, rest2.numGuests);

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1.owner, rest2.owner);

//Challenge #1
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game2 = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    xx: 3.25,
    team2: 6.5,
  },
  printGoals: function (...numbers) {
    console.log(numbers);
    console.log(`${numbers.length} goals were scored`);
  },
};

//task 01
const [player1, player2] = game2.players;

//task 02
const [gk01, ...fieldPlayers01] = player1;
const [gk02, ...fieldPlayers02] = player2;
console.log(gk01, fieldPlayers01);

//task 03
const allPlayer = [...player1, ...player2];
console.log(allPlayer);

//task 04
const player1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];

//task 05
const {
  odds: { team1: team2_1, xx: draw2, team2: team2_2 },
} = game2;
console.log(team2_1, draw2, team2_2);

//task 06
game2.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

game2.printGoals(...game2.scored);

//task07
console.log(
  `the win team is ${game2.odds.team1 < game2.odds.team2 ? 'team1' : 'team2'} `
);
team2_1 < team2_2 && console.log('team1 is more likely to win');
team2_1 > team2_2 && console.log('team2 is more likely to win');

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    xx: 3.25,
    team2: 6.5,
  },
  printGoals: function (...numbers) {
    let strMember = '';
    for (let i = 0; i < numbers.length; i++) {
      strMember += i !== numbers.length - 1 ? numbers[i] + ',' : numbers[i];
    }
    console.log(strMember);
  },
};

//task 1
const players1 = game.players[0];
const players2 = game.players[1];
console.log(players1, players2);

//task 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//task 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//task4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//task 5
const { team1, xx: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//task 6
game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals(game.scored);

//task 7
game.odds.team1 < game.odds.team2 &&
  console.log('Team 1 is more likely to win');
game.odds.team1 > game.odds.team2 &&
  console.log('Team 2 is more likely to win');

//Challenge #1 end

// console.log(restaurant);

//113
//Optional Chaining (_.)
//
// console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderTest?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: 'Robin', email: 'hello@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty');
console.log(users[0]?.names ?? 'User array empty');

const properities = Object.keys(openingHours);
console.log(properities);

for (const day of Object.keys(openingHours)) {
  console.log(day);
}
for (const day of Object.values(openingHours)) {
  console.log(day);
}

for (const [index, { open, close }] of Object.entries(openingHours)) {
  console.log(index, open, close);
}

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

//250507 practice again
//task1
for (const [i, item] of game.scored) {
  console.log(`Goal ${i + 1}: ${item}`);
}

//task2
let sumOdd = 0;
for (const socre of Object.values(game.odds)) {
  sumOdd += socre;
}
console.log((sumOdd / Object.values(game.odds).length).toFixed(2));

//task3
console.log(game['team1']);
for (const [i, socre] of Object.entries(game.odds)) {
  // game.team1 === i ?? console.log(`Odd of ${game.team1}: ${socre}`);
  const teamName = game[i] ?? 'draw';
  console.log(`Odd of ${teamName} : ${socre}`);
  // console.log(game[i] ?? 'draw', socre);
}

//bonus
//scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
const scorersA = {};
for (const player of game.scored) {
  scorersA[player] ? scorersA[player]++ : (scorersA[player] = 1);
}
console.log(scorersA);

//task1
for (let [i, score] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${score}`);
}

//task2
let oddSum = 0;
for (const odd of Object.values(game.odds)) {
  oddSum += odd;
}
console.log((oddSum / Object.values(game.odds).length).toFixed(2));

//task3
for (const [team, odd] of Object.entries(game.odds)) {
  console.log(game[team] ?? 'draw', odd);
}

//BONUS
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

//116 Set
const orderSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(orderSet);

console.log(orderSet.size);
orderSet.add('Garlic');
orderSet.delete('Pasta');

console.log(orderSet);

console.log([...orderSet]);

//117 Maps
const rest = new Map();
rest.set('1', 'string');
rest.set(1, 'number');
console.log(rest);
// rest.delete('1');
// rest.delete('2');

const arrMap = [1, 2];
rest.set(arr, 'test');
rest.set(true, 'right');
rest.set(false, 'wrong');
console.log(rest);

//covert object to map
console.log(Object.entries(openingHours));

for (const [key, value] of rest) {
  if (typeof key === 'number') console.log(key, value);
}

//120
///////////////////////////////////////
// Coding Challenge #3
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//task1
const events = new Set();
for (const value of gameEvents.values()) {
  events.add(value);
}

console.log([...events]);

const events2 = new Set(gameEvents.values());
console.log([...events2]);
//task2
gameEvents.delete(64);
console.log(gameEvents);

//task 3
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//task 4
gameEvents.forEach((v, k) => {
  const half = k <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(half + ' ' + k + ': ' + v);
});

//121 Working with strings part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); //A
console.log('A320'.length);

console.log(plane.indexOf(' ')); //-1

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky ');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('11A');

//122 Working with strings part 2
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'JOnaS';
const passagerLower = passenger.toLowerCase();
console.log(passagerLower[0].toUpperCase() + passagerLower.slice(1));

//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail === email);

// replacing
const priceGB = '28B,97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23, Boarding door 23!';
console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const plane1 = 'A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.startsWith('A3'));
console.log(plane1.endsWith('eo')); //index

console.log(plane1.indexOf('A320')); //index

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, ome food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//123 Working with strings part 3
console.log('a+very+nice+string'.split('+'));

const [fisrtName, lastName] = 'Robin Chen'.split(' ');
console.log(fisrtName, lastName);

const newName = ['Mr.', fisrtName, lastName.toUpperCase()].join(' ');
console.log(newName);

const arrJoin = ['aa', 'bb', 'cc', 'dd'];
console.log(arrJoin.join('_'));

//padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+'));
console.log(message.padEnd(20, '-'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);

  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(435856987447));
console.log(maskCreditCard('435856987488'));

//repeat
const message2 = 'Bad weather... All departures Delayed...';
console.log(message2.repeat(3));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🏃‍♂️‍➡️'.repeat(n)}`);
};

planeInLine(5);
planeInLine(8);

//124 Coding Challenge #4
///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
const camelCase = function (word, num) {
  const wordSplit = word.trim().toLowerCase().split('_');
  const wordCamelCase =
    wordSplit[0] +
    wordSplit[1].replace(wordSplit[1][0], wordSplit[1][0].toUpperCase());

  console.log(wordCamelCase.padEnd(20, ' '), '✅'.repeat(num));
};
const arrChallenge = [
  'underscore_case',
  'first_name',
  'Some_Variable',
  'calculate_AGE',
  'delayed_departure',
];

let num = 1;
for (const word of arrChallenge) {
  camelCase(word, num);
  num++;
}

//125 String Methods Practice
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flightsArr = flights.split('+');

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flightsArr) {
  //const flightArr = flight.split(';');
  // const flightStr =
  //   (flightArr[0].startsWith('_Delayed')
  //     ? '🔴' + flightArr[0]
  //     : '' + flightArr[0]
  //   ).replace(/_/g, ' ') +
  //   ' from ' +
  //   flightArr[1].slice(0, 3).toUpperCase() +
  //   ' to ' +
  //   flightArr[2].slice(0, 3).toUpperCase() +
  //   ' (' +
  //   flightArr[3].replace(':', 'h') +
  //   ')';
  // console.log(flightStr.padStart(50));

  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} ${time.replace(':', 'h')}`.padStart(36);
  console.log(output);
}

//set is not index
//worng
//orderSet[0]

/**
 * Set
//  */
// const orderSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// console.log(orderSet);

// console.log(new Set('RobinsIvyI'));
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza')); //true
// console.log(orderSet.has('pizza')); //flase

// orderSet.add('Bread');
// orderSet.delete('Risotto');
// console.log(orderSet);

// // orderSet.clear();
// console.log(orderSet);

// //orderSet[0]; //doesn't work

// for (const order of orderSet) console.log(order);

// //Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef'];
// console.log(staff);
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// /**
//  * Map
//  */
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest
//   .set(1, 'Firenze, Italy')
//   .set(2, 'Lisbon, Portugal')
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D');

// const time = 21;
// console.log(rest.has('open'));
// rest.delete('open');
// // rest.clear();
// console.log(rest);

// rest.set([1, 2], 'Test'); //underfine
// console.log(rest.get([1, 2]));
// const arr3 = [1, 2];
// rest.set(arr3, 'Test'); //Test
// console.log(rest.get(arr3));

// const question = new Map([
//   ['question', 'What is the best programming language in the world'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['Correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again!'],
// ]);
// console.log(question);
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));

// // if (answer === question.get('Correct')) console.log(question.get(true));
// // else {
// //   console.log(question.get(false));
// // }

// //Convert map to array
// console.log(...question);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

// console.log(typeof rest);
// console.log(typeof orderSet);

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //task1
// const gameEventsSet = new Set(gameEvents.values());
// console.log([...gameEventsSet]);

// //task2
// gameEvents.delete(64);
// console.log(gameEvents);

// //task3

// const time1 = [...gameEvents.keys()].pop();

// console.log(
//   `An event happened, on average, every ${time1 / gameEvents.size} minutes`
// );

// //task4
// gameEvents.forEach((value, index) => {
//   console.log(index <= 45 ? `[FIRST HALF]` : `[SECOND HALF]`, index, value);
// });

// //Challenge #3 end

// /**
//  * String
//  */
// const str1 = 'Robin';
// console.log(str1.slice(2));

// const announcement = 'All passager come to boarding door, Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// const [firstName, lastName] = 'Robin Chen'.split(' ');

// const newName = ['Mr.', firstName, lastName].join(' ');
// console.log(newName);

// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(35, '-'));

// const makeCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   console.log(last.padStart(str.length, '*'));
// };

// makeCreditCard(2378463864647384);
// makeCreditCard('2378463864647385');

//Repeat

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// const camelCase = function (word, n) {
//   const arr = word.trim().toLowerCase().split('_');
//   let rs = '';
//   for (const [index, value] of arr.entries()) {
//     rs += index > 0 ? value[0].toUpperCase() : value[0];
//     rs += value.slice(1);
//   }
//   rs = rs.padEnd(20, ' ');
//   rs += '✅'.repeat(n);
//   console.log(rs);
// };

// camelCase('underscore_case', 1);
// camelCase(' first_name', 2);
// camelCase('Some_Variable', 3);
// camelCase('delayed_departure', 4);
// camelCase('  calculate_AGE', 5);

// ///////////////////////////////////////
// // String Methods Practice

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)
// //console.log(flights.split('+'));
// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type
//     .slice(1)
//     .replaceAll('_', ' ')} from ${from.slice(0, 3).toUpperCase()} to ${to
//     .slice(0, 3)
//     .toUpperCase()} (${time.replace(':', 'h')})`.padStart(36);
//   console.log(output);
// }

// // function foo() {
// //   xx = 1; // Throws a ReferenceError in strict mode
// // }

// // foo();
// // console.log(xx); // 1
// const aaa = function name(a, b) {};
// console.log(aaa());

// var globalVar = 'global';
// var outerVar = 'outer';

// function outerFunc(outerParam) {
//   function innerFunc(innerParam) {
//     console.log(globalVar, outerParam, innerParam);
//   }
//   return innerFunc;
// }

// const xxx = outerFunc(outerVar);
// xxx('inner');
// outerVar = 'outer-2';
// globalVar = 'guess';

// xxx('inner');

// const arrs = [1, 2, 3];
// const double = arrs.map(function (el) {
//   return el * 2;
// });
// console.log(double); // [2, 4, 6]

// var someFunc = function () {
//   return this.length;
// };
// // [1, 2, 3].someFunc(); //3

// // someFunc.apply(undefined, [1, 2, 3]);

// // someFunc.call(null, 1, 2, 3);

// function duplicate(arr) {
//   const newArr = [...arr, ...arr];
//   console.log(newArr);
// }

// duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

// console.log('hello' || 'world');
// console.log('foo' && 'bar');
