  let randomNumber = parseInt(Math.random()*100+1);

  const submit = document.querySelector('#subt');
  const userInput = document.querySelector('#guessField');
  const guessSlot = document.querySelector('.guesses');
  const remaining = document.querySelector('.lastResult');
  const lowOrHi = document.querySelector('.lowOrHi');
  const startOver = document.querySelector('.resultParas');

  const p = document.createElement('p');

  let prevGuess = [];
  let numGuesses = 1;

  let playGame = true;

  if(playGame){
    submit.addEventListener('click',function(e){
      e.preventDefault(); // number ko rokne ke liye ..nhi toh khi aur chala jata hai 
      const guess = parseInt(userInput.value)
      console.log(guess)
      validateGuess(guess)
    })
  }

  function validateGuess(guess){
    if(isNaN(guess)){
      alert('please enter a valid number ')
    } else if(guess < 1){
      alert('enter a valid number')
    } else if(guess > 100){
      alert('enter somethimh less than 100')
    } else {
      prevGuess.push(guess)
      if(numGuesses == 11){
        displayGuess(guess)
        displayMessage(`game over . Random number was ${randomNumber}`)
        endGame()
      } else{
        displayGuess(guess)
        checkGuess(guess)
      }
    }
  }

  function checkGuess(guess){
    if(guess === randomNumber){
      displayMessage(`you guessed it right`)
      endGame()
    } else if(guess < randomNumber){
      displayMessage(`Number is Too low`)
    } else if(guess > randomNumber){
      displayMessage(`Number is Too high`)
    }
  }

  function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} ,`
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`
  }

  function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
  }

  function endGame(){
    userInput.value = '';
    userInput.disabled = true; 
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
  }

  function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuesses = 1;
      guessSlot.innerHTML = ''; // Clear previous guesses
      remaining.innerHTML = `${11 - numGuesses}`;
      lowOrHi.innerHTML = ''; // Clear message
      userInput.disabled = false;  // Re-enable input
      userInput.value = '';  // Clear input field
      startOver.removeChild(p); 
      playGame = true;
    });
  }








