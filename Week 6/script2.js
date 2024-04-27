const message = document.getElementById('msg');
const guessInput = document.getElementById('input');
const guessButton = document.getElementById('guessBtn');
const attemptsDisplay = document.getElementById('attempts');

let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
let attempts = 0;

guessButton.addEventListener('click', function() {
  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess)) {
    message.textContent = "Please enter a valid number!";
    return;
  }

  if(attempts < 5){
    if (userGuess === randomNumber) {
        message.textContent = "Congratulations! You guessed the number in " + attempts + " attempts!";
        guessButton.disabled = true; // Disable button after winning
      } else if (userGuess < randomNumber) {
        message.textContent = "Your guess is low, try again";
      } else {
        message.textContent = "Your guess is high, try again";
      }
  }else{
    message.textContent = "Sorry, you lost!";
    guessButton.disabled = true;
  }

  guessInput.value = ""; // Clear the input field after each guess
});