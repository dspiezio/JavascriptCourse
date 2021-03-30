const bill1 = prompt("How much is your bill? ");
const tip = prompt("How much do you want to tip? ");
const tipPercent1 = (tip / bill1) * 100;
const acceptableTip = bill1 * .2;
console.log(`Your bill was ${bill1} and you want to tip ${tipPercent1} percent. 
You tipped ${tip} but an acceptable tip would have been ${acceptableTip}`)

const bill = Number(prompt("How much is your bill? "));
tipPercent = bill >= 50 && bill <= 300 ? .15 : .20;
totalTip = bill * tipPercent;
console.log(`The bill was ${bill}, the tip was ${totalTip}, and the total value was ${bill + totalTip}`)