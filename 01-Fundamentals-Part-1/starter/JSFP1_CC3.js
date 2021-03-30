// Data 1
/*
const scoreDolphins1 = 96;
const scoreDolphins2 = 108;
const scoreDolphins3 = 89;
const avgScoreDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;

const scoreKoalas1 = 88;
const scoreKoalas2 = 91;
const scoreKoalas3 = 110;
const avgScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;
*/
// Bonus Data 1
/*
const scoreDolphins1 = 97;
const scoreDolphins2 = 112;
const scoreDolphins3 = 101;
const avgScoreDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;

const scoreKoalas1 = 109;
const scoreKoalas2 = 95;
const scoreKoalas3 = 123;
const avgScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;
*/
// Bonus Data 2

const scoreDolphins1 = 97;
const scoreDolphins2 = 112;
const scoreDolphins3 = 101;
const avgScoreDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;


const scoreKoalas1 = 109;
const scoreKoalas2 = 95;
const scoreKoalas3 = 106;
const avgScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;


// The actual code
console.log(`Dolphins score ${avgScoreDolphins}`)
console.log(`Koalas score ${avgScoreKoalas}`)
if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins > 100) {
    console.log(`The Dolphins win with an average score of ${avgScoreDolphins}!`)
} else if (avgScoreDolphins < avgScoreKoalas && avgScoreKoalas > 100) {
    console.log(`The Koalas win with an average score of ${avgScoreKoalas}!`)
} else if (avgScoreDolphins === avgScoreKoalas && avgScoreKoalas > 100) {
    console.log("It's a draw! Both teams win!")
} else {
    console.log("No one wins... Try harder next time! EMBARRASING!")
}
