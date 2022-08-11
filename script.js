'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const text = function (content) {
  document.querySelector('.message').textContent = content;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //no guess
  if (!guess) {
    text(`Type a number!`);
  }

  /// WIN ///
  else if (guess === secretNumber) {
    text('Correct wow amazing !!!');
    document.querySelector('.number').textContent = secretNumber;

    document.documentElement.style.setProperty('--main', '#9dff00');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  /// WE TOO HIGH ///
  else if (guess > secretNumber) {
    if (score > 0) {
      const element = document.getElementById('messagewin');
      element.classList.add('message-wrong');

      document.querySelector('.message').textContent = 'Too high!';
      score -= 5;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').style.color = '#e63946';
      document.querySelector(
        '.message'
      ).textContent = `You lost the game! Now prepare to lose your life! X﹏X`;
    }
  }

  /// WE TOO LOW ///
  else if (guess < secretNumber) {
    if (score > 0) {
      const element = document.getElementById('messagewin');
      element.classList.add('message-wrong');

      document.querySelector('.message').textContent = `Too low.`;
      score -= 5;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').style.color = '#e63946';
      document.querySelector(
        '.message'
      ).textContent = `You lost the game, fool! Now prepare to lose your life! X﹏X`;
    }
  }
});
