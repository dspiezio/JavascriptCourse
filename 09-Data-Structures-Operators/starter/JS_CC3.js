'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1
const gameArray = [new Set(gameEvents.values())];

console.log(gameArray);
// 2
gameEvents.delete(64);
// console.log(gameEvents);

// 3
let count = 0;
let average = 0;
for (const time of gameEvents) {
  count++;
  average = 90 / count;
}
console.log(`An event happened, on average, every ${average} minutes`);

// 3 correct
const gameTime = [...gameEvents.keys()].pop();
console.log(
  `An event on average happened every ${gameTime / gameEvents.size} minutes`
);
// 4
for (const [time, event] of gameEvents) {
  if (time <= 45) {
    console.log(`[First half] ${time}: ${event}`);
  } else {
    console.log(`[Second half] ${time}: ${event}`);
  }
}

// 4 correct
for (const [min, event] of gameEvents) {
  const half = min => (45 ? 'FIRST' : 'SECOND');
  console.log(`[${half} HALF] ${min}: ${event}`);
}
