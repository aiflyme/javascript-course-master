'use strict';

let x = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', () => {
  //get use input number
  const guess = document.querySelector('.guess').value;

  let scoreContent = document.querySelector('.score').textContent;
  let highScore = document.querySelector('.highscore').textContent;
  //textContent = Number(textContent) - 1;
  document.querySelector('.score').textContent = Number(scoreContent) - 1;

  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

  //if statement
  if (!guess) {
    displayMessage('🪨 No number!');
  }
  //win the game
  else if (Number(guess) === x) {
    displayMessage('Correct numer!');
    //display correct answer
    document.querySelector('.number').textContent = x;

    if (Number(scoreContent) > Number(highScore)) {
      console.log(Number(scoreContent));
      console.log(Number(highScore));
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
    }
    //add css background
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else {
    //guess all time
    if (scoreContent <= 0) {
      displayMessage('You lost the game!');
    } else {
      displayMessage(Number(guess) > x ? 'Too high!' : 'Too low!');
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  hander();
});

function hander() {
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  //document.querySelector('.highscore').textContent = 0;
  document.querySelector('.score').textContent = 20;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  //general new random number
  x = Math.trunc(Math.random() * 20) + 1;
}
//score
//highscore
