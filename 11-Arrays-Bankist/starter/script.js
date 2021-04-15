'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Dominic Spiezio',
  movements: [-2900, 1000, 1000, -180, 1800],
  interestRate: 1.75,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// const movementsUSD = movements.map(function (mov) {
//   return (mov * euroToUsd).toFixed(2);
// });

// const movementsUSDArrow = movements.map(mov => (mov * euroToUsd).toFixed(2));

// const movUSDFor = [];
// for (const mov of movements) movUSDFor.push((mov * euroToUsd).toFixed(2));

// console.log(movementsUSDArrow);
// console.log(movementsUSD);
// console.log(movUSDFor);

// const movementsMap = movements.map(function (mov, i) {
//   const message = mov > 0 ? 'deposited' : 'withdrew';
//   return `Movement ${i + 1}: You ${message} ${Math.abs(mov)}\n`;
// });

// console.log(...movementsMap);

// const user = 'Dominic Spiezio';

// const username = user
//   .toLocaleLowerCase()
//   .split(' ')
//   .map(name => name[0])
//   .join('');

// console.log(username);

// const createUsernames = function (user) {
//   const username = user
//     .toLocaleLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   return username;
// };

// console.log(createUsernames('Lydia Edgecombe-Pepperell'));

// const deposits = movements.filter(mov => mov > 0);

// const withdrawals = movements.filter(mov => mov < 0);

// const balance = movements.reduce((accum, cur) => accum + cur, 0);

// const depositsTotal = movements
//   .filter(mov => mov > 0)
//   .reduce((sum, mov) => sum + mov, 0);
// const withdrawalTotal = movements
//   .filter(mov => mov < 0)
//   .reduce((sum, mov) => sum + mov, 0);
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUsd)
//   .reduce((sum, mov) => sum + mov, 0)
//   .toFixed(2);

// console.log(totalDepositsUSD);

// console.log(deposits);
// console.log(withdrawals);
// console.log(depositsTotal);
// console.log(withdrawalTotal);
// console.log(balance);

// const max = movements.reduce(
//   (accum, mov) => (accum > mov ? accum : mov),
//   movements[0]
// );
// console.log(max);

// movements;

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Dominic Spiezio');
// console.log(account);

// console.log(movements);
// console.log(movements.includes(-130));

// const anyDeposits = movements.some(mov => mov > 5000);
// console.log(anyDeposits);

// // const onlyDeposits = movements.every(mov => mov > 0);

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

// console.log(arrDeep.flat());
// console.log(arrDeep.flat(2));
// // console.log(arrDeep.flatMap());
// const accountsBalance = accounts.map(acc => acc.movements);
// console.log(accountsBalance);
// const acccountFlat = accountsBalance.flat();
// console.log(acccountFlat);
// const accountBalCombined = acccountFlat.reduce((acc, mov) => acc + mov, 0);
// console.log(accountBalCombined);
// const accountChanged = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(accountChanged);

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha', 'Dominic'];
// const ownersSort = owners.sort();
// console.log(ownersSort);

// const move = movements.sort();
// console.log(move);

// const movedAcc = movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(movedAcc);

// const movedDec = movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
// console.log(movedDec);

// const movedAccShort = movements.sort((a, b) => a - b);
// console.log(movedAccShort);

// const movedDecShort = movements.sort((a, b) => b - a);
// console.log(movedDecShort);
