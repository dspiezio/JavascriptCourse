'use strict';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  this.age = currentYear - this.birthYear;
};

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    this.ageCl = currentYear - this.birthYear;
  }
  get age() {
    return currentYear - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`Howdy`);
  }
}

const dominic = new Person('Dominic', 1988);
const lydia = new PersonCl('lydia EP', 1994);

dominic.calcAge();
lydia.calcAge();

// console.log(dominic);
// console.log(lydia);

// const account = {
//   owner: 'Dominic',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 500;
// console.log(account.latest);

// console.log(lydia.age);

// Person.hey = function () {
//   console.log(`Hey there`);
// };

// // Person.hey();
// // PersonCl.hey();

// const PersonProto = {
//   calcAge() {
//     console.log(currentYear - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);

// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven);

// const saraha = Object.create(PersonProto);

// saraha.init('Sarah', 1979);

// saraha.calcAge();
// console.log(saraha);

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2002, 'Computer Science');

mike.calcAge();
mike.introduce();

console.log(mike);
