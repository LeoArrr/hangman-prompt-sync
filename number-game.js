const chalk = require("chalk");
const prompt = require("prompt-sync")();
const NumberGuessingGame = require("./number-game-logic");

function startNumberGuessingGame() {
  const game = new NumberGuessingGame();

  console.log(chalk.cyan("Guess a number between 1 and 100."));

  while (true) {
    const guess = parseInt(prompt(chalk.magenta("Enter your guess: ")));

    if (isNaN(guess)) {
      console.log(chalk.red("Invalid input. Please enter a number."));
      continue;
    }

    console.log(chalk.yellow(game.guessNumber(guess)));

    game.decrementAttempts();
  }
}
