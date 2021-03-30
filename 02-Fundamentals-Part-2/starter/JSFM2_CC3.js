'use strict'

const mark = {
    firstName: "Mark",
    lastName:  "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function (){
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
};
const john = {
    firstName: "John",
    lastName:  "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function (){
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
}
mark.calcBMI()
john.calcBMI()

if (mark.bmi> john.bmi){
    console.log(`${mark.firstName} ${mark.lastName}'s BMI is ${mark.bmi} which is higher than ${john.firstName} ${john.lastName} who has a BMI of ${john.bmi}!`)
} else {    
    console.log(`${john.firstName} ${john.lastName}'s BMI is ${john.bmi} which is higher than ${mark.firstName} ${mark.lastName} who has a BMI of ${mark.bmi}!`)
}