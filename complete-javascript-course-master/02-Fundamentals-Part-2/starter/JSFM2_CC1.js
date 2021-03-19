'use strict'

const calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;

let avgDolphins = calcAverage(44, 23 , 71);
let avgKoalas = calcAverage(65, 54 , 49);



function checkWinner(avgDolphins,avgKoalas){
    if (avgDolphins >= avgKoalas*2){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgKoalas >= avgDolphins*2){
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log(`No one wins... Dolphins ${avgDolphins} vs Koalas ${avgKoalas}`)
    }
}
checkWinner(avgDolphins,avgKoalas);

avgDolphins = calcAverage(85, 54 , 41);
avgKoalas = calcAverage(23, 34 , 27);
checkWinner(avgDolphins,avgKoalas);