// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const tempList1 = [3, -2, -6 ,-1,"error",9, 13, -8,17, 15,20, 14, 9, 5];
// const tempList2 = [25, 7, , 8 , -2 ,0, "error", 15, -15];

// const combinedLists = tempList1.concat(tempList2);

// function getTempts(temp){
//     let max = temp[0];
//     let min = temp[0];
//     for (let i = 0; i < temp.length; i++){
//         if (typeof temp[i] === "number"){
//         if(temp[i] > max) max = temp[i]
//         if(temp[i] < min) min = temp[i]
//         }
//     }
//     const minMaxTempts = [min,max];
//     return minMaxTempts;
// }

// console.log(getTempts(combinedLists));

const measureKelvin = function(){
    const measurement = {
        type: "temp",
        unit: "cels",
        value: Number(prompt(`Degrees celcius: `))        
    }
    const kelvin = measurement.value + 273;
    return kelvin;
}

console.log(measureKelvin());