'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const result = Number(
      prompt(
        `${this.question}\n${this.options
          .splice(',')
          .join(`\n`)}\n (Write option number)`
      )
    );
    if (typeof result === 'number' && result <= this.answers.length) {
      poll.answers[result]++;
    }
    console.log(...poll.answers);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
