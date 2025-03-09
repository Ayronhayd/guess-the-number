const body = document.querySelector('body');
const guessMessage = document.querySelector('.guess-message');
const question = document.querySelector('.question');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const again = document.querySelector('.again');
const check = document.querySelector('.check');
let scoreNumber = 20;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);


check.addEventListener('click', function () {
   const numberInput = Number(document.querySelector('.number-input').value);

   if (!numberInput) {
      guessMessage.textContent = 'Введите число';
      //  угадали
   } else if (numberInput === secretNumber) {
      guessMessage.textContent = 'Вы угадали';
      body.style.backgroundColor = 'green';
      question.textContent = secretNumber;
      question.style.width = '40rem';
      // число меньше
   } else if (numberInput > secretNumber) {

      if (scoreNumber > 1) {
         guessMessage.textContent = 'Загаданное число меньше';
         scoreNumber--;
         score.textContent = scoreNumber;
      } else {
         guessMessage.textContent = 'Вы проиграли';
         score.textContent = 0;
      }
      // число больше
   } else if (numberInput < secretNumber) {
      if (scoreNumber > 1) {
         guessMessage.textContent = 'Загаданное число больше';
         scoreNumber--;
         score.textContent = scoreNumber;
      } else {
         guessMessage.textContent = 'Вы проиграли';
         score.textContent = 0;
      }
   }
});