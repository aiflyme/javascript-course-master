'use strict';

const x = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', () => {
  //get use input number
  const guess = document.querySelector('.guess').value;

  const textContent = document.querySelector('.score').textContent;
  //textContent = Number(textContent) - 1;
  document.querySelector('.score').textContent = Number(textContent) - 1;

  //if statement
  if (!guess) {
    document.querySelector('.message').textContent = '🪨 No number!';
  } else if (Number(guess) === x) {
    document.querySelector('.message').textContent = 'Correct numer!';
    document.querySelector('.highscore').textContent =
      document.querySelector('.score').textContent;
  } else if (Number(guess) > x) {
    document.querySelector('.message').textContent = 'Too high!';
  } else if (Number(guess) < x) {
    document.querySelector('.message').textContent = 'Too low!';
  }
});

//score
//highscore
