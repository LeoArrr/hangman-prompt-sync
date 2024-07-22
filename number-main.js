const chalk = require("chalk");
const prompt = require("prompt-sync")();
const { NumberGuessingGame } = require("./number-game-logic");

// Function to get a reaction or hint based on guess difference
function provideFeedback(guess, numberToGuess, game) {
  const difference = Math.abs(guess - numberToGuess);

  if (difference > 15) {
    // Randomly select a reaction
    const reaction = game.getReaction();
    return chalk.hex("#FF69B4")(`${reaction}\n`);
  } else {
    // Randomly select a hint
    const hint = game.getHint();
    return chalk.greenBright(`${hint}\n`);
  }
}

function printGameOverMessage(isLoss, numberToGuess) {
  if (isLoss) {
    console.log(chalk.red(`\nGame over! The number was ${numberToGuess}.\n`));
  } else {
    console.log(chalk.green(`\nCongratulations! You've guessed the number!\n`));
  }
}

function startNumberGuessingGame() {
  console.log(
    chalk.hex("#33CCFF")("\n**INITIALIZING NEUROCORE INTERFACE...**\n")
  );
  const game = new NumberGuessingGame();

  console.log(chalk.cyan("\nWelcome to the Number Guessing Game!"));

  console.log(chalk.cyan("Guess a number between 1 and 100.\n"));

  while (true) {
    const input = prompt(
      chalk.magenta("Enter your guess (or 'q' to quit): ")
    ).toLowerCase();

    if (input === "q") {
      console.log(chalk.red("\nExiting game..."));
      break;
    }

    const guess = parseInt(input);

    if (isNaN(guess)) {
      console.log(chalk.red("\nInvalid input. Please enter a number.\n"));
      continue;
    }

    if (guess < 1 || guess > 100) {
      console.log(chalk.red("\nGuess must be between 1 and 100.\n"));
      continue;
    }

    const result = game.guessNumber(guess);

    console.log(`${result}\n`);

    // Use provideFeedback to give additional feedback
    const numberToGuess = game.getNumberToGuess();
    console.log(provideFeedback(guess, numberToGuess, game));

    const remainingAttempts = game.getRemainingAttempts();

    if (result.includes("Congratulations") || result.includes("Game over")) {
      printGameOverMessage(result.includes("Game over"), numberToGuess);
      break;
    }

    if (remainingAttempts <= 0) {
      printGameOverMessage(true, numberToGuess);
      break;
    }

    console.log(chalk.cyan(`Remaining attempts: ${remainingAttempts}\n`));
  }
}

module.exports = { startNumberGuessingGame };
