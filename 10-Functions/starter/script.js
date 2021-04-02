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

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...otherWords] = str.split(' ');
  return [firstWord.toUpperCase(), ...otherWords].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed by: ${fn.name}`);
  console.log(`Transformed string: ${fn(str)}`);
};

// transformer('javascript is the best!', upperFirstWord);
transformer("javascript is a new language that I'm learning", oneWord);

const high5 = function () {
  console.log(`👋`);
};

document.body.addEventListener('click', high5);

['Dominic', 'Chris', 'Ross'].forEach(high5);
