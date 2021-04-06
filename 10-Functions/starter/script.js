'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123', 9);

// const flight = 'LH234';
// const dominic = {
//   name: 'Dominic Spiezio',
//   passport: 2435625668,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 2435625668) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// // checkIn(flight, dominic);
// // console.log(flight);
// // console.log(dominic);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(dominic);
// checkIn(flight, dominic);
// console.log(dominic);

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [firstWord, ...otherWords] = str.split(' ');
//   return [firstWord.toUpperCase(), ...otherWords].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed by: ${fn.name}`);
//   console.log(`Transformed string: ${fn(str)}`);
// };

// // transformer('javascript is the best!', upperFirstWord);
// transformer("javascript is a new language that I'm learning", oneWord);

// const high5 = function () {
//   console.log(`👋`);
// };

// document.body.addEventListener('click', high5);

// ['Dominic', 'Chris', 'Ross'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('dominic');
// greeterHey('lydia');

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// greet('hello')('dominic');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// const book = lufthansa.book;

// lufthansa.book(131, 'Dominic Spiezio');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(lufthansa, 255, 'Sarah Connor');
// book.call(eurowings, 255, 'Sarah Connor');
// book.call(swiss, 367, 'Sean Connar');

// const flightData = [583, 'George Cooper'];

// book.apply(swiss, flightData);

// book.call(swiss, ...flightData);

// const bookEW = book.bind(eurowings);
// const bookLX = book.bind(swiss);
// const bookLH = book.bind(lufthansa);
// bookEW(23, 'Stephen Hawking');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Joe Smith');
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // const buyPlaneLH = lufthansa.buyPlane.bind(lufthansa);

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate, value) => (value + value * rate).toFixed(2);

// console.log(addTax(0.075, 59.99));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(99.99));

// // const doVat = addVAT => addTax => (value + value * rate).toFixed(2);

// // console.log(doVat(0.075, 9.99));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return (value + value * rate).toFixed(2);
//   };
// };

// const addVat2 = addTaxRate(0.075);
// console.log(addVat2(59.99));

// const runOnce = function () {
//   console.log(`This will never run again!`);
// };

// runOnce();

// (function () {
//   console.log(`This will never run again!`);
//   const isPrivate = 23;
// })();

// {
//   const isPrivate = 23;
//   let isNotPrivate = 64;
// }
// console.log(isNotPrivate);
// console.log(isPrivate);

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();
// booker();
// booker();

// console.dir(booker);

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// h();
// f();

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 3);
