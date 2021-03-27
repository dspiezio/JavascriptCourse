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

// 1
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2
let sum = 0;
let average = 0;
const odds = Object.values(game.odds);
for (const number of odds) {
  sum += number;
  average = sum / odds.length;
}
console.log(`Average odd is ${average.toFixed(2)}`);

// 3

// const { team1, x: draw, team2 } = { ...game.odds };
// const [team, odds, { teamOdds }] = Object.entries(game);
for (const [team, odds] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory for ${game[team]}`;
  console.log(`Odds of ${teamStr} is ${odds}`);
}
