'use strict';

const againButton = document.querySelector('.again');
const checkButton = document.querySelector('.check');
const number = document.querySelector('.number');
const body = document.querySelector('body');
const guess = document.querySelector('.guess');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function setTextContent(element, newValue) {
    document.querySelector(element).textContent = newValue
}

checkButton.addEventListener('click', function() {
    const guessNumber = Number(document.querySelector('.guess').value);

    if (!guessNumber) {
        setTextContent('.message', "No number!!!");
    } else if (guessNumber === secretNumber) {
        setTextContent('.message', "Correct!!!");
        setTextContent('.number', secretNumber);
        body.style.backgroundColor = "#60b347";
        number.style.width = '300px';

        if (score > highScore) {
            highScore = score;
            setTextContent('.highscore', highScore);
        }
    } else if (guessNumber !== secretNumber) {
        const result = guessNumber > secretNumber ? "Too high!!" : "Too low!!";
        if (score > 1) {
            setTextContent('.message', result);
            score--;
            setTextContent('.score', score);
        } else {
            setTextContent('.message', "Oops! You lost the game.");
            setTextContent('.score', 0);
        }
    }
})

againButton.addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    setTextContent('.score', score);
    setTextContent('.message', 'Start guessing...');
    setTextContent('.number', '?');
    number.style.width = '150px';
    body.style.backgroundColor = "#222";
    guess.value = '';
})
