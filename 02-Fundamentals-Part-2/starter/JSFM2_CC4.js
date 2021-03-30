'user strict'

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
let sum = 0

function calcTip(bill){
    tipPercent = bill >= 50 && bill <= 300 ? .15 : .20;
    totalTip = bill * tipPercent;
    tips.push(totalTip);
    totals.push(bill + totalTip)
    console.log(`The bill was ${bill}, the tip was ${totalTip}, and the total value was ${bill +    totalTip}`)
    tips.push(totalTip)
    totals.push(bill + totalTip)
}

function calcAverage(arr){
    let sum = 0
    for( let i = 0; i <= arr.length -1; i++){
    sum += arr[i];
    }
    return (sum/arr.length).toFixed(2);
}

for(let i = 0; i <= bills.length-1; i++){
    let bill = bills[i];
    calcTip(bill);
    calcAverage(tips)
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
