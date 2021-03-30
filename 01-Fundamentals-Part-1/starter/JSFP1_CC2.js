// Data1
const weightMarkData1 = 78;
const heightMarkData1 = 1.69;

const weightJohnData1 = 92;
const heightJohnData1 = 1.88;

// BMI 1
const markBMIData1 = weightMarkData1 / heightMarkData1 ** 2;
const johnBMIData1 = weightJohnData1 / heightJohnData1 ** 2;


// Is Mark's BMI higher 1
const markHigherBMI1 = markBMIData1 > johnBMIData1

if (markHigherBMI1) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}


// Data 2
const weightMarkData2 = 95;
const heightMarkData2 = 1.88;

const weightJohnData2 = 85;
const heightJohnData2 = 1.76;

// BMI 2
const markBMIData2 = weightMarkData2 / heightMarkData2 ** 2;
const johnBMIData2 = weightJohnData2 / heightJohnData2 ** 2;


// Is Mark's BMI higher 2
const markHigherBMI2 = markBMIData2 > johnBMIData2
if (markHigherBMI2) {
    console.log(`Mark's BMI (${markBMIData2}) is higher than John's (${johnBMIData2})!`)
} else {
    console.log(`John's BMI (${johnBMIData2}) is higher than Mark's (${markBMIData2})!`)
}