const prompt = require("prompt-sync")();
const chalk = require("chalk");
const hangman = require("./game");

console.log(chalk.green.bold("Welcome to Hangman!"));
console.log(chalk.cyan("Choose a topic: Music, City, or Animal"));

const topic = prompt(chalk.magenta("Enter a topic: ")).toLowerCase();

if (!["music", "city", "animal"].includes(topic)) {
  console.log(chalk.red("Invalid topic. Exiting game."));
  process.exit();
}

hangman.startGame(topic);

console.log(chalk.blue(hangman.displayWord()));
console.log(chalk.yellow(hangman.displayLifespan()));

while (true) {
  const letter = prompt(chalk.magenta("Guess a letter: ")).toLowerCase();

  hangman.guessLetter(letter);

  console.log(chalk.blue(hangman.displayWord()));
  console.log(chalk.yellow(hangman.displayLifespan()));

  if (hangman.checkWin()) {
    console.log(chalk.green("Congratulations! You won!"));
    break;
  }

  if (hangman.checkLoss()) {
    console.log(chalk.red(`Sorry, you lost! The word was ${hangman.word}`));
    break;
  }

  if (hangman.lifespan.length === 0) {
    console.log(chalk.red("'¯\\_(:/)_/¯'"));
    console.log(chalk.red("Game over!"));
    break;
  }
}
