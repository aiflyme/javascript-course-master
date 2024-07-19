'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// score1El.textContent = score0El.textContent = 0;
// diceEl.classList.add('hidden');

let scores, currentScore, activePlayer, playing;

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  btnHold.disabled = false;
  btnRoll.disabled = false;

  diceEl.classList.add('hidden');

  current0El.textContent =
    current1El.textContent =
    score1El.textContent =
    score0El.textContent =
    currentScore =
      0;
  activePlayer = 0;
  playing = true;
};

//initial
init();

//Rolling dice function
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', () => {
  //1 Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // console.log(dice);
  //2 Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3 Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore; //change later
  } else {
    //switch to next player
    switchPlayer();
  }
  // console.log(activePlayer);
});

btnHold.addEventListener('click', () => {
  //1 add current score to active player's score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //2 check if player's score is >=100
  //finish the game
  if (scores[activePlayer] >= 20) {
    playing = false;
    btnHold.disabled = true;
    btnRoll.disabled = true;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    //switch to the next player
    switchPlayer();
  }
  console.log(scores);
});

btnNew.addEventListener('click', () => {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  init();
});
