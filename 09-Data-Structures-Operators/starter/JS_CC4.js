'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector(`button`).addEventListener(`click`, function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split(`\n`);

  for (const [i, word] of rows.entries()) {
    const wordChopped = word.toLowerCase().trim().split(`_`);
    const secondWord = wordChopped[1];
    const secondWordUC = secondWord.replace(
      secondWord[0],
      secondWord[0].toUpperCase()
    );
    const wordsCombined = wordChopped[0] + secondWordUC;
    console.log(`${wordsCombined.padEnd(20, ` `)} ${`✅`.repeat(i + 1)}`);
  }
});

// document.querySelector(`button`).addEventListener(`click`, function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split(`\n`);

//   for (const [index, word] of rows.entries()) {
//     const [first, second] = word.toLowerCase().trim().split(`_`);
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${`✅`.repeat(index + 1)}`);
//   }
// });
