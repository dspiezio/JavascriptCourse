'use strict';

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelarate() {
    console.log(`The ${this.make} is now going ${(this.speed += 10)}`);
    return this;
  }
  brake() {
    console.log(`The ${this.make} is now going ${(this.speed -= 5)}`);
    return this;
  }
}

class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this._charge = charge;
  }
  chargeBattery(chargeTo) {
    this._charge = chargeTo;
    console.log(`Battery has been charged to ${chargeTo}`);
    return this;
  }
  accelarate() {
    console.log(
      `The ${
        this.make
      } is now going ${(this.speed += 20)} and the charge is now ${this
        .charge--}`
    );
    return this;
  }
}

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);

tesla.accelarate().chargeBattery(50).accelarate().brake().accelarate();
