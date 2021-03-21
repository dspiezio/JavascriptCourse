"use strict";
// // get message
// let message = console.log(document.querySelector(".message").textContent);
// // change message
// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// console.log((document.querySelector(".score").textContent = 10));
// document.querySelector(".guess").value = 20;
// console.log(document.querySelector(".guess").value);

let highScore = 0;
let score = 20;
let goalNumber = randomNumber();
theGame();
resetGame();
// generates random number
function randomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}
// checks if player number is random number
function checkNumber(num) {
  // if there  player input
  if (!num) {
    setMessage("No number!");
    // if player input equal to goal number
  } else if (num === goalNumber) {
    setMessage("Correct number!");
    document.querySelector(".number").textContent = goalNumber;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#0398fc";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else {
    setMessage(
      num < goalNumber ? "Too low. Guess again!" : "Too high. Guess again!"
    );
    decrementScore();
  }
}
//runs the actual game
function theGame() {
  document.querySelector(".check").addEventListener("click", function () {
    let playerGuess = Number(document.querySelector(".guess").value);
    checkNumber(playerGuess);
  });
}
// decrement score by 1
function decrementScore() {
  if (score > 1) {
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".score").textContent = 0;
    setMessage("Score is at 0. You lose!");
  }
}
//resets the game
function resetGame() {
  document.querySelector(".again").addEventListener("click", function () {
    goalNumber = randomNumber();
    score = 20;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    setMessage("Start guessing...");
    document.querySelector(".guess").value = "";
  });
}

function setMessage(string) {
  document.querySelector(".message").textContent = string;
}
