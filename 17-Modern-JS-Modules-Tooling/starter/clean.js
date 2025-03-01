'strict mode';

const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'robin' },
  { value: -45, description: 'Groceries 🥑', user: 'robin' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'robin' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'robin' },
  { value: -1100, description: 'New iPhone 📱', user: 'robin' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'robin' },
];

//immutability
const spendingLimits = Object.freeze({
  robin: 1500,
  matilda: 100,
});
spendingLimits.jay = 200;
console.log(spendingLimits);

const getLimit = (limites, user) => limites?.[user] ?? 0;

//prettier-ignore
const addExpense = function (state, limites, value, description, user = 'robin') {
  // if (!user) user = 'robin';
  const cleanUser = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  // const limit = spendingLimits?.[user] ?? 0;
  // const limit = getLimit(limites,user);

  // if (value <= cleanUser) {
  //   //budget.push({ value: -value, description, user });
  // }
  return value <= getLimit(limites,cleanUser) ? [...state,{value:-value, description, user:cleanUser}] : state;
};
const budgetNew1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const budgetNew2 = addExpense(
  budgetNew1,
  spendingLimits,
  100,
  'movies 🍿',
  'Matilda'
);
const budgetNew3 = addExpense(budgetNew2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(budgetNew3);

const checkExpenses = function (state, limits) {
  //for (const entry of budget) {
  //let lim;
  // if (spendingLimits[entry.user]) {
  //   lim = spendingLimits[entry.user];
  // } else {
  //   lim = 0;
  // }

  //const limit = spendingLimits?.[entry.user] ?? 0;
  return state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );
  // const limit = getLimit(entry.user);

  // if (entry.value < -limit) {
  //   entry.flag = 'limit';
  // }
  //}
};
const finalBudget = checkExpenses(budgetNew3, spendingLimits);

console.log('finalBudget:');
console.log(finalBudget);

const bigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');

  const bigExpenses2 = state
    .filter(entry => entry.value <= -bigLimit)
    .reduce((acc, cur) => {
      `${acc} / ${cur.description.slice(-2)}`;
      console.log(acc, cur);
    }, '');

  console.log(bigExpenses);
  console.log(bigExpenses2.slice(2).trim());
  // for (const entry of budget) {
  //   //if (entry.value <= -bigLimit) {
  //   // output += entry.description.slice(-2) + ' / '; // Emojis are 2 chars
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)}` + ' / ' : '';
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};
bigExpenses(finalBudget, 1000);
