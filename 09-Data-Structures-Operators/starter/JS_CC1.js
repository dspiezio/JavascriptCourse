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
  printGoals: function (...player) {
    for (let i = 0; i < player.length; i++) {
      console.log(`Congrats! ${player[i]} scored a goal!`);
    }
    console.log(`Total goal scored is ${player.length}`);
  },
};

const [players1, players2] = [...game.players];
const [gk1, ...fieldPlayers1] = players1;
const players1Final = [...fieldPlayers1, 'Thiago', 'Coutinho', 'Perisic'];
const [gk2, ...fieldPlayers2] = players2;
const allPlayers = [...players1, ...players2];
const { team1, x: draw, team2 } = { ...game.odds };

// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich', 'Lewandowski');
game.printGoals(...game.scored);

team1 < team2
  ? console.log('Team 1 will most likely win!')
  : console.log('Team 2 will most likely win!');

team1 < team2 && console.log('Team 1 will most likely win!');
team1 > team2 && console.log('Team 2 will most likely win!');
