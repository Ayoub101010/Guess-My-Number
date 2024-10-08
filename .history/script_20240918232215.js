'use strict';

/*console.log(document.querySelector('.message').textContent);*/
/*document.querySelector('.message').textContent = ` 🎉 Correct guess `;

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 2;
document.querySelector('.guess').value = 34;*/

//document.querySelector('.guess').value = '';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there's no input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No number!';

    // when the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ` 🎉 Correct guess `;
    //document.querySelector('.label').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high! ';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 you lost the game ';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low! ';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 you lost the game ';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing... ';
});
