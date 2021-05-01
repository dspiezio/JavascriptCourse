'use strict';

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }

  accelarate() {
    console.log(`The ${this.make} is now going ${(this.speed += 10)}`);
  }
  brake() {
    console.log(`The ${this.make} is now going ${(this.speed -= 5)}`);
  }
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

const ford = new Car('Ford', 120);

bmw.accelarate();
bmw.brake();
mercedes.brake();
mercedes.accelarate();

console.log(ford.speedUs);

ford.accelarate();
ford.speedUs = 50;
console.log(ford);
