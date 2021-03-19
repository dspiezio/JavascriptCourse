'use strict';

const rollsTally = [];
const totalScore = [];
let min = 0;
const max = 10; 
let result1 = 0;
let result2 = 0;
let totalRolled = 0;
let numberOfTurns = 10;
let gameTotal = 0;
let lastRoll;
let secondToLastRoll;
let thirdToLastRoll;
let fourthToLastRoll;
let lastFrame;
let secondToLastFrame;
let thirdToLastFrame;

function strike(){
    console.log(`You got a strike!`);
}
function spare(result2){
    console.log(`You knocked down ${result2} pins. You got a spare!`);
}
function part(result){
    console.log(`You knocked down ${result} pins.`);
}
function gutter(){
    console.log(`You rolled a gutter ball...`);
}
function roundTotal(result1,result2){
    console.log(`Total pins knocked down this frame was ${result1+result2}.`);
    return totalRolled = result1+result2;
}
function summedFrames(totalScore){
    // for( let i = 0; i <= totalScore.length -1; i++)
    return gameTotal += totalScore;    
}
function roll(min,max){
    const pinsKnockedDown = Math.floor(Math.random() * (max - min + 1)) + min;
    // const pinsKnockedDown = 10;
    // const pinsKnockedDown = 5;
    return pinsKnockedDown;
}
function takeTurn(){     
    result1 = roll(min,max);
    result2 = 0;
    let max2 = max - result1;
    // strike
    if (result1 === 10){
        strike() 
    // gutter
    } else if (result1 === 0) {
        gutter()
        result2 = roll(min,max2);
        // gutter spare
        if (result2 === 10) {
            spare(result2) 
        // gutter gutter       
        } else if (result2 === 0) {
            gutter()
        // gutter part
        } else {
            part(result2);           
        }        
    // part
    } else {
        part(result1);
        result2 = roll(min,max2); 
        // part spare  
        if (result2+result1 === 10) {
            spare(result2)  
        // part gutter  
        } else if (result2 === 0) {
            gutter()
        // part part
        } else {
            part(result2);  
        }
    }  
    roundTotal(result1,result2);    
}
function extraRoll(){
    console.log(`You got a spare in the final frame. Take an extra roll!`);
    result2 = 0;
    result1 = roll(min,max);
    if (result1 === 10){
        strike() 
    // gutter
    } else if (result1 === 0) {
        gutter()        
    // part
    } else {
        part(result1);        
    }  
    roundTotal(result1,result2); 
        
}
function extraTwoRolls(){
    console.log(`You got a strike in the final frame. Take two extra rolls!`);
    result1 = roll(min,max);
    result2 = 0;
    let max2 = max - result1;
    // strike
    if (result1 === 10){
        strike() 
        result2 = roll(min,max2);
        // strike strike
        if (result2 === 10) {
            strike() 
        // strike gutter       
        } else if (result2 === 0) {
            gutter()
        // strike part
        } else {
            part(result2);           
        }  
    // gutter
    } else if (result1 === 0) {
        gutter()
        result2 = roll(min,max2);
        // gutter spare
        if (result2 === 10) {
            spare(result2) 
        // gutter gutter       
        } else if (result2 === 0) {
            gutter()
        // gutter part
        } else {
            part(result2);           
        }        
    // part
    } else {
        part(result1);
        result2 = roll(min,max2); 
        // part spare  
        if (result2+result1 === 10) {
            spare(result2)  
        // part gutter  
        } else if (result2 === 0) {
            gutter()
        // part part
        } else {
            part(result2);  
        }
    }  
    roundTotal(result1,result2);
}
function takeScore(result1,result2,totalRolled){  
    rollsTally.push(result1);
    rollsTally.push(result2);
    
    // lastRoll = rollsTally[rollsTally.length-1];
    // secondToLastRoll = rollsTally[rollsTally.length-2];
    // thirdToLastRoll = rollsTally[rollsTally.length-3];
    // fourthToLastRoll = rollsTally[rollsTally.length-4];
    // lastFrame = totalScore[totalScore.length-1];
    // secondToLastFrame = totalScore[totalScore.length-2];
    // thirdToLastFrame = totalScore[totalScore.length-3];

    // do stupid math for a strike
    if (result1 === 10 && result2 === 0){
        totalScore.push(totalRolled);
        // console.log(rollsTally.length);
        // console.log(`do stupid math for a strike`)
        // console.log(`lastRoll ${lastRoll}`);
        // console.log(`secondToLastRoll ${secondToLastRoll}`);
        // console.log(`thirdToLastRoll ${thirdToLastRoll}`);
        // console.log(`fourthToLastRoll ${fourthToLastRoll}`);
        // console.log(`lastFrame ${lastFrame}`);
        // console.log(`secondToLastFrame ${secondToLastFrame}`);
        // console.log(`thirdToLastFrame ${thirdToLastFrame}`);
        // console.log(rollsTally);
        // console.log(totalScore);    
    // do math for spare
    } else if (result1+result2 === 10){
        totalScore.push(totalRolled);
        // console.log(rollsTally.length);
        // console.log(`do math for spare`)
        // console.log(`lastRoll ${lastRoll}`);
        // console.log(`secondToLastRoll ${secondToLastRoll}`);
        // console.log(`thirdToLastRoll ${thirdToLastRoll}`);
        // console.log(`fourthToLastRoll ${fourthToLastRoll}`);
        // console.log(`lastFrame ${lastFrame}`);
        // console.log(`secondToLastFrame ${secondToLastFrame}`);
        // console.log(`thirdToLastFrame ${thirdToLastFrame}`);
        // console.log(`The math ${fourthToLastRoll}+${thirdToLastRoll}+${secondToLastRoll}`);
        // totalScore[totalScore.length-1] = fourthToLastRoll+thirdToLastRoll+secondToLastRoll;
    } else {
        
        totalScore.push(totalRolled);
    }
    lastFrame = totalRolled;
    summedFrames(lastFrame); 
    console.log(`Your total this game is ${gameTotal}.`)
    console.log(rollsTally);
    console.log(totalScore);
       
    

}
for (let turn = 1; turn <= numberOfTurns; turn++ ){
    if (turn <= 10){
        console.log(`Beginning frame number ${turn}.`)
        takeTurn();  
          
    }
    takeScore(result1,result2,totalRolled);
    console.log(``); 
    if (turn === 10 && totalRolled === 10){
        if (rollsTally[rollsTally.length-2]===10){
            extraTwoRolls();
            takeScore(result1,result2,totalRolled);
        } else{
            extraRoll();
            takeScore(result1,result2,totalRolled);
        }
    } 
         
}
