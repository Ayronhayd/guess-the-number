const guessMessage = document.querySelector('.guess-message');
const question = document.querySelector('.question');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const again = document.querySelector('.again');
const check = document.querySelector('.check');
let scoreNumber = 20;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
question.textContent = secretNumber;

check.addEventListener('click', function () {
   const numberInput = Number(document.querySelector('.number-input').value);
   console.log(numberInput, typeof numberInput);

   if (!numberInput) {
      guessMessage.textContent = 'Введите число';
   } else if (numberInput === secretNumber) {
      guessMessage.textContent = 'Вы угадали';
   } else if (numberInput > secretNumber) {

      if (scoreNumber > 1) {
         guessMessage.textContent = 'Загаданное число меньше';
         scoreNumber--;
         score.textContent = scoreNumber;
      } else {
         guessMessage.textContent = 'Вы проиграли';
         score.textContent = 0;
      }
   } else if (numberInput < secretNumber) {
      if (scoreNumber > 1 ){
         guessMessage.textContent = 'Загаданное число больше';
         scoreNumber--;
         score.textContent = scoreNumber;
      } else {
         guessMessage.textContent = 'Вы проиграли';
         score.textContent = 0;
      }
   }
});