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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`Battery has been charged to ${chargeTo}`);
};

EV.prototype.accelarate = function () {
  console.log(
    `The ${
      this.make
    } is now going ${(this.speed += 20)} and the charge is now ${this.charge--}`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);

tesla.accelarate();
tesla.chargeBattery(50);
tesla.accelarate();
tesla.brake();
tesla.accelarate();
