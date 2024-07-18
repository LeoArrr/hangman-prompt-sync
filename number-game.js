const chalk = require("chalk");
const prompt = require("prompt-sync")();
const NumberGuessingGame = require("./number-game-logic");

function startNumberGuessingGame() {
  const game = new NumberGuessingGame();

  console.log(chalk.cyan("Guess a number between 1 and 100."));

  while (true) {
    const input = prompt(chalk.magenta("Enter your guess: "));

    if (!/^\d+$/.test(input)) {
      console.log(chalk.red("Invalid input. Please enter a number."));

      continue;
    }
    if (isNaN(guess)) {
      console.log(chalk.red("Invalid input. Please enter a number."));
      continue;
    }

    console.log(chalk.yellow(game.guessNumber(guess)));

    game.decrementAttempts();
  }
}
