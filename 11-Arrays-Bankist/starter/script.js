'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

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
