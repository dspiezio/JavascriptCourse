'use strict';

// let currentYear = 2021;
// const me = [
//     "Dominic",
//     "Spiezio",
//     currentYear-1988,
//     "Programer",
//     ["Chris","Ross","Daniel"],
//     true
// ];


// for(let i = me.length - 1; i >= 0; i--){
//     console.log(i, me[i]);
// }

// for(let pushups = 1; pushups <=10; pushups++ ){
//     console.log(`Doing pushup number ${pushups}`);
// }

// let rep = 1;
// while(rep <=10){
//     console.log(`Doing pushup number ${rep}`);
//     rep++
// }

let dice = Math.trunc(Math.random() * 6)  + 1;
while(dice !== 6){    
    
    dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
}