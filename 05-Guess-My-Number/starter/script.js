'use strict';

let x = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', () => {
  //get use input number
  const guess = document.querySelector('.guess').value;

  let scoreContent = document.querySelector('.score').textContent;
  let highScore = document.querySelector('.highscore').textContent;
  //textContent = Number(textContent) - 1;
  document.querySelector('.score').textContent = Number(scoreContent) - 1;

  //if statement
  if (!guess) {
    document.querySelector('.message').textContent = '🪨 No number!';
  }
  //win the game
  else if (Number(guess) === x) {
    document.querySelector('.message').textContent = 'Correct numer!';
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
      document.querySelector('.message').textContent = 'You lost the game!';
    }
    if (Number(guess) > x) {
      document.querySelector('.message').textContent = 'Too high!';
    } else if (Number(guess) < x) {
      document.querySelector('.message').textContent = 'Too low!';
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
