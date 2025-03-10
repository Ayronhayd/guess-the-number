const body = document.querySelector('body');
const guessMessage = document.querySelector('.guess-message');
const question = document.querySelector('.question');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const again = document.querySelector('.again');
const check = document.querySelector('.check');
const inputField = document.querySelector('.number-input');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let highScore = 0;


check.addEventListener('click', function () {
   const numberInput = Number(inputField.value);

   if (!numberInput) {
      guessMessage.textContent = 'Введите число';
      //  угадали
   } else if (numberInput === secretNumber) {
      guessMessage.textContent = 'Вы угадали';
      body.style.backgroundColor = 'green';
      question.textContent = secretNumber;
      question.style.width = '40rem';

      if (scoreNumber > highScore) {
         highScore = scoreNumber;
         document.querySelector('.highscore').textContent = highScore;
      }

   } else if (numberInput !== secretNumber) {
      if (scoreNumber > 1) {
         guessMessage.textContent = numberInput > secretNumber ? 'Загаданное число меньше' : 'Загаданное число больше';
         scoreNumber--;
         score.textContent = scoreNumber;
      } else {
         guessMessage.textContent = 'Вы проиграли';
         score.textContent = 0;
      }

   }
});

again.addEventListener('click', function () {
   question.textContent = '???';
   question.style.width = '25rem';
   guessMessage.textContent = 'Начни угадывать';
   scoreNumber = 20;
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   body.style.backgroundColor = '#222';
   inputField.value = '';
});