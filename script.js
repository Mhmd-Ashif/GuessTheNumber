'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let backgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess == secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🏆 You Won!');
    backgroundColor('#60b347');
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⬆ Too High!' : '⬇ Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.number').textContent = secretNumber;
      displayMessage('😢 OOPs You Have Lost The Game! , Try Again..');
      document.querySelector('.score').textContent = 0;
      backgroundColor('#f54842');
      document.querySelector('.number').style.width = '30rem';
    }
  }
});
//Refresh Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  backgroundColor('#222');
});
