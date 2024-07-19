// number-game-logic.js

class NumberGuessingGame {
  constructor() {
    this.numberToGuess = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    this.maxAttempts = 10;
    this.attemptsLeft = this.maxAttempts;
  }

  guessNumber(guess) {
    if (guess === this.numberToGuess) {
      return "Congratulations! You've guessed the number!";
    } else {
      this.attemptsLeft -= 1;
      if (this.attemptsLeft <= 0) {
        return `Game over! The number was ${this.numberToGuess}.`;
      }
      return `Incorrect guess. ${this.attemptsLeft} attempts left.`;
    }
  }

  getRemainingAttempts() {
    return this.attemptsLeft;
  }

  getNumberToGuess() {
    return this.numberToGuess;
  }
}

module.exports = { NumberGuessingGame };
