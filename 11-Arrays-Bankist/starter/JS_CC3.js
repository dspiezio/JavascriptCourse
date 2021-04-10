'use strict';

// Coding Challenge #3
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!

const dogAge = [5, 2, 4, 1, 15, 8, 3];
const dogAge2 = [16, 6, 10, 5, 6, 1, 4];

const calcAvgHumanAge = function (dogAge) {
  const humanAge = dogAge
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age > 18)
    .reduce((accum, age, i, arr) => accum + age / arr.length, 0);
  return humanAge;
};

console.log(calcAvgHumanAge(dogAge));
console.log(calcAvgHumanAge(dogAge2));
