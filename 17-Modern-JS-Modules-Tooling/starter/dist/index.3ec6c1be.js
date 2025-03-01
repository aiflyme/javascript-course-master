'strict mode';
const budget = [
    {
        value: 250,
        description: "Sold old TV \uD83D\uDCFA",
        user: 'robin'
    },
    {
        value: -45,
        description: "Groceries \uD83E\uDD51",
        user: 'robin'
    },
    {
        value: 3500,
        description: "Monthly salary \uD83D\uDC69\u200D\uD83D\uDCBB",
        user: 'robin'
    },
    {
        value: 300,
        description: "Freelancing \uD83D\uDC69\u200D\uD83D\uDCBB",
        user: 'robin'
    },
    {
        value: -1100,
        description: "New iPhone \uD83D\uDCF1",
        user: 'robin'
    },
    {
        value: -20,
        description: "Candy \uD83C\uDF6D",
        user: 'matilda'
    },
    {
        value: -125,
        description: "Toys \uD83D\uDE82",
        user: 'matilda'
    },
    {
        value: -1800,
        description: "New Laptop \uD83D\uDCBB",
        user: 'robin'
    }
];
//immutability
const spendingLimits = Object.freeze({
    robin: 1500,
    matilda: 100
});
spendingLimits.jay = 200;
console.log(spendingLimits);
const getLimit = (user)=>spendingLimits?.[user] ?? 0;
const addExpense = function(value, description, user = 'robin') {
    // if (!user) user = 'robin';
    user = user.toLowerCase();
    // let lim;
    // if (spendingLimits[user]) {
    //   lim = spendingLimits[user];
    // } else {
    //   lim = 0;
    // }
    // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
    // const limit = spendingLimits?.[user] ?? 0;
    const limit = getLimit(user);
    if (value <= limit) budget.push({
        value: -value,
        description,
        user
    });
};
addExpense(10, "Pizza \uD83C\uDF55");
addExpense(100, "Going to movies \uD83C\uDF7F", 'Matilda');
addExpense(200, 'Stuff', 'Jay');
console.log(budget);
const checkExpenses = function() {
    for (const entry of budget){
        //let lim;
        // if (spendingLimits[entry.user]) {
        //   lim = spendingLimits[entry.user];
        // } else {
        //   lim = 0;
        // }
        //const limit = spendingLimits?.[entry.user] ?? 0;
        const limit = getLimit(entry.user);
        if (entry.value < -limit) entry.flag = 'limit';
    }
};
checkExpenses();
console.log(budget);
const bigExpenses = function(bigLimit) {
    let output = '';
    for (const entry of budget)//if (entry.value <= -bigLimit) {
    // output += entry.description.slice(-2) + ' / '; // Emojis are 2 chars
    output += entry.value <= -bigLimit ? `${entry.description.slice(-2)}` + ' / ' : '';
    output = output.slice(0, -2); // Remove last '/ '
    console.log(output);
};
bigExpenses(1000);

//# sourceMappingURL=index.3ec6c1be.js.map
