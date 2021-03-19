'use strict';
const bill = [125,555,44];
const tips = [];
const total = [];
let totalTip;
let tipPercent;

function calcTip(bill){
    tipPercent = bill >= 50 && bill <= 300 ? .15 : .20;
    totalTip = bill * tipPercent;
    tips.push(totalTip);
    total.push(bill + totalTip)
    console.log(`The bill was ${bill}, the tip was ${totalTip}, and the total value was ${bill + totalTip}`)
}

calcTip(bill[0]);
calcTip(bill[1]);
calcTip(bill[2]);

console.log(bill);
console.log(tips);
console.log(total);