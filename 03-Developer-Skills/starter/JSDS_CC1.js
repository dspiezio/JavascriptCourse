"use strict"



const forcast1 = [17,21,23];
const forcast2 = [12,5,-5,0,4];

// const weeklyForcast = [];


function printForecast(arr){
    const futureCast = [];
    for (let i = 0; i < arr.length; i++){
        if(i===0){
            futureCast.push(`... ${arr[i]}°C in ${i+1} day`);
        } else {
            futureCast.push(`... ${arr[i]}°C in ${i+1} days`);          
        }
    } 
    return futureCast.join(' ');
}


function printFutureCast(arr){
    let futureCast = "";
    for (let i = 0; i < arr.length; i++){
        if(i===0){
            futureCast += `... ${arr[i]}°C in ${i+1} day`;
        } else {
            futureCast += `... ${arr[i]}°C in ${i+1} days`;         
      }
    } 
    return futureCast
}
console.log(printForecast(forcast1));  
console.log(printForecast(forcast2));
console.log(printFutureCast(forcast1));  
console.log(printFutureCast(forcast2));