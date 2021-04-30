'use strict';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const dominic = new Person('Dominic', 1988);

Person.prototype.calcAge = function () {
  this.age = currentYear - this.birthYear;
};

dominic.calcAge();

console.log(dominic);
