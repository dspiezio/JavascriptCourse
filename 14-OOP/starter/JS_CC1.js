'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelarate = function () {
  console.log(`The ${this.make} is now going ${(this.speed += 10)}`);
};

Car.prototype.brake = function () {
  console.log(`The ${this.make} is now going ${(this.speed -= 5)}`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelarate();
bmw.accelarate();
bmw.accelarate();
bmw.brake();
mercedes.brake();
mercedes.accelarate();
mercedes.accelarate();
