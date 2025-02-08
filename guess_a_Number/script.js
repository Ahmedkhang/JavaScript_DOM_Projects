let randomNumber = parseInt(Math.random()*100 + 1);
console.log(randomNumber);

const guess = document.querySelector('#guess');
const guessField = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guesses = document.querySelector('.guesses');
const lastGuess =  document.querySelector('.lastGuess');
const lowOrHigh =  document.querySelector('.lowOrHigh');
const startOver =  document.querySelector('.resultParas');
const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let  game = true;

if(game){
   submit.addEventListener('click', function(e){
      e.preventDefault();
      const guess = parseInt(guessField.value);
      console.log(guess);
      validateGuess(guess);
      
   })
}
function validateGuess(guess){
 if(isNaN(guess)){
    alert('please enter a valid number')
 }
 else if(guess < 1){
    alert('please enter a valid value')
 }
 else if(guess > 100){
    alert('please enter a valid value')
 }  
 else{
   prevGuess.push(guess)
   if(guess === randomNumber){
      displayGuess(guess)
      displayMessage(`Game Over`)
      endGame()
   }
   else{
      displayGuess(guess)
      checkGuess(guess)
   }
 }
}
function checkGuess(guess){
   if(guess === randomNumber){
      displayMessage('You Guessed Correctly')
   }
   else if(guess < randomNumber){
      displayMessage('Try Again! Number is too Low!')
   } 
   else if(guess > randomNumber){
      displayMessage('Try Again! Number is too High!')
   }
//
}
function displayGuess(guess){
   guessField.value = '';
   guesses.innerHTML += `${guess},`; 
   numGuess ++;
   lastGuess.innerHTML = `${11 - numGuess}`;

}

function displayMessage(message){
  lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(guess){
   guessField.setAttribute('disabled', '')
   guessField.innerHTML = '';
  game = false;
  p.classList.add('button');
  p.innerHTML = `<h3 id='newGame'>New Game</h3>`;
  startOver.appendChild(p);
  startGame();
}
function startGame(guess){
   const newGameButton =document.querySelector('#newGame');
   newGameButton.addEventListener('click', function(e){
      
   
   randomNumber = parseInt(Math.random()*100 + 1);
   prevGuess = [];
   numGuess = 1;
   lowOrHigh.innerHTML = '';
   guesses.innerHTML = '';
   lastGuess.innerHTML = `${11 - numGuess}`
   startOver.removeChild(p);
   guessField.removeAttribute('disabled')
   game = true;
})
} 