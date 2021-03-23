'use strict';
// player elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// buttons element
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldDice = document.querySelector('.btn--hold');
btnNewGame.addEventListener('click', newGame);
btnRollDice.addEventListener('click', rollDice);
btnHoldDice.addEventListener('click', holdDice);

// overal scores element
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');

// current scores element
let current0 = document.getElementById('current--0');
let current1 = document.getElementById('current--1');

// dice
let diceImage = document.querySelector('.dice');
diceImage.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let gameOver = false;

function rollDice() {
  // if game isnt over roll dice
  if (!gameOver) {
    diceImage.classList.remove('hidden');
    let rolledDice = Math.floor(Math.random() * 6) + 1;
    diceImage.src = `dice-${rolledDice}.png`;
    // if a 1 is rolled end player turn and lose all current score
    if (rolledDice !== 1) {
      currentScore += rolledDice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;
      togglePlayer();
    }
  }
}

function newGame() {
  diceImage.classList.add('hidden');
  current0.textContent = 0;
  current1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore = 0;
  activePlayer = 0;
  gameOver = false;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  scores[0] = 0;
  scores[1] = 0;
}

function holdDice() {
  // if the game isnt over hold the dice and tally score
  if (!gameOver) {
    scores[activePlayer] += currentScore;
    if (scores[activePlayer] < 100) {
      switchPlayer();
      activePlayer = activePlayer === 0 ? 1 : 0;
      togglePlayer();
    } else {
      switchPlayer();
      diceImage.classList.add('hidden');
      gameOver = true;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
  }
}

function togglePlayer() {
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

function switchPlayer() {
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  scores.activePlayer += currentScore;
  currentScore = 0;
}
