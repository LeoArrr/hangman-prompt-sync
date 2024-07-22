const chalk = require("chalk");
const prompt = require("prompt-sync")();
const { NumberGuessingGame } = require("./number-game-logic");

// Sample reactions and hints arrays
const reactions = [
  "System error detected. Initiating diagnostic protocols...",
  "Warning: Security breach imminent. Proceed with caution.",
  "Analyzing potential outcomes...",
  "Error: Data corruption detected. Attempting recovery...",
  "Critical malfunction identified. Engaging troubleshooting sequence...",
  "Alert: Unauthorized access attempt detected. Locking down systems...",
  "Processing request... Anomaly detected, further analysis required.",
  "Warning: Resource depletion imminent. Initiating emergency protocols...",
  "Error: System overload imminent. Scaling down processes...",
  "Diagnostic mode activated. Evaluating system integrity...",
  "Alert: Communication disruption. Re-establishing connection...",
  "Error: Firmware conflict detected. Deploying repair mechanisms...",
  "Warning: Excessive heat detected. Cooling systems engaged...",
  "System alert: Unscheduled reboot initiated. Analyzing cause...",
];

const hints = [
  "Proximity sensors active. Target acquisition improving...",
  "Navigational algorithms converging...",
  "Signal clarity increasing...",
  "System optimization detected. Nearing target...",
  "Trajectory alignment achieved. Final approach initiated...",
  "Power levels stabilizing. System functionality improving...",
  "Operational efficiency increasing. Preparing for final phase...",
  "Navigation path recalibrated. Proceeding with enhanced accuracy...",
  "Signal strength optimal. Close to achieving objective...",
  "Engagement protocols active. Monitoring for final adjustments...",
  "System diagnostics confirm optimal conditions. Moving forward...",
  "Proximity indicators green. Awaiting further instructions...",
  "Mission parameters locked. Advancing to final execution phase...",
  "Operational thresholds met. Preparing for next phase...",
];

// Function to get a reaction or hint based on guess difference
function provideFeedback(guess, numberToGuess) {
  const difference = Math.abs(guess - numberToGuess);

  if (difference > 15) {
    // Randomly select a reaction
    const reaction = reactions[Math.floor(Math.random() * reactions.length)];
    return chalk.hex("#FF69B4")(`${reaction}\n`);
  } else {
    // Randomly select a hint
    const hint = hints[Math.floor(Math.random() * hints.length)];
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

    console.log(provideFeedback(guess, numberToGuess));

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
