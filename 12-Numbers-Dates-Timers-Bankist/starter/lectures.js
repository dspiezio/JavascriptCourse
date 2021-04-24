'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 === 23.0);

// console.log(+'23');
// console.log(+'23');

// console.log(Number.parseInt('30px'));
// // out 30
// console.log(Number.parseInt('e23'));
// // out NaN
// console.log(Number.parseInt('2.5rem'));
// // out 2
// console.log(Number.parseFloat('2.5rem'));
// // out 2.5
// console.log(Number.isNaN(20));
// // false
// console.log(Number.isNaN('20'));
// // false
// console.log(Number.isNaN(+'20x'));
// // true
// console.log(Number.isNaN(23 / 0));
// // false
// console.log(Number.isFinite(20));
// // true
// console.log(Number.isFinite('20'));
// // false
// console.log(Number.isFinite(+'20x'));
// // false
// console.log(Number.isFinite(23 / 0));
// // false

// console.log(Math.sqrt(25));
// // 5
// console.log(Math.max(25, 189, 23, 11, 2));
// // 189
// console.log(Math.min(25, 189, 23, 11, 2));
// // 2
// console.log(Math.PI * Number.parseFloat('10px') ** 2);
// // 314.1592
// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(1, 20));

// console.log(Math.trunc(23.3));
// // 23
// console.log(Math.round(23.3));
// // 23
// console.log(Math.round(23.9));
// // 24
// console.log(Math.ceil(23.3));
// // 24
// console.log(Math.ceil(23.9));
// // 24
// console.log(Math.floor(23.3));
// // 23
// console.log(Math.floor(23.9));
// // 23

// console.log(5 % 2);
// // 1
// console.log(5 / 2);
// // 2.5
// console.log(8 % 3); // 8 = 2 * 3 +2
// // 2
// console.log(8 / 3);
// // 2.6
// console.log(6 % 2);
// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(13));
// console.log(isEven(23));

// labelBalance.addEventListener('click', function () {
//     [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//       if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     });
//   });
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);
// console.log(123456789123456789123456789);
// console.log(123456789123456789123456789n);
// console.log(10000n + 10000n);
// console.log(123456789123456789123456789n * 123456789123456789123456789n);
// const huge = 123456789123456789123456789n;
// const num = 23;
// console.log(huge * BigInt(num));
// const account3 = {
//   owner: 'Dominic Spiezio',
//   movements: [-2900, 1000, 10000, -180, 1800, -200, -300, 500],
//   interestRate: 1.75,
//   pin: 5555,

//   movementsDates: [
//     '2021-01-01T13:15:33.035Z',
//     '2021-01-30T09:48:16.867Z',
//     '2021-02-25T06:04:23.907Z',
//     '2021-03-25T14:18:46.235Z',
//     '2021-03-05T16:33:06.386Z',
//     '2021-03-10T14:43:26.374Z',
//     '2021-04-15T18:49:59.371Z',
//     '2021-04-16T12:01:20.894Z',
//   ],
//   currency: 'USD',
//   locale: 'en-US',
// };

// const now = new Date();
// console.log(now);

// console.log(new Date('Aug 02 2020 18:05:41'));
// console.log(new Date('June 1, 1988'));

// console.log(new Date(account3.movementsDates[0]));
// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31, 15, 23, 5));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());
// console.log(new Date(2142274980000));
// console.log(Date.now());
// future.setFullYear(2040);
// console.log(future);
// const future = new Date(2037, 10, 19, 15, 23);

// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

// const days1 = calcDaysPassed(
//   new Date(2021, 4, 16, 10, 8),
//   new Date(2021, 4, 20)
// );
// console.log(days1);
// const options = {
//   style: 'currency',
//   currency: 'EUR',
// };
// const num = 38884764.23;
// console.log(new Intl.NumberFormat('en-US', options).format(num));
// console.log(new Intl.NumberFormat('de-DE', options).format(num));
// console.log(new Intl.NumberFormat(navigator.language, options).format(num));
// const ingredients = ['ham', 'cheese'];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Pizza is here with ${ing1} and ${ing2}`),
//   5000,
//   ...ingredients
// );
// console.log(`Waiting for pizza`);

// if (ingredients.includes('pineapple')) clearTimeout(pizzaTimer);

setInterval(function () {
  const now = new Date();
  console.log(
    now.toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  );
}, 1000);
