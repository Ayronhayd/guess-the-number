const guessMessage = document.querySelector('.guess-message');
const question = document.querySelector('.question');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const again = document.querySelector('.again');
const check = document.querySelector('.check');

check.addEventListener('click', function() {
   const numberInput = Number(document.querySelector('.number-input').value);
   console.log(numberInput, typeof numberInput);

   if (!numberInput) {
      guessMessage.textContent = 'Введите число';
   }
});






