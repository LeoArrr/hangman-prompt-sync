const chalk = require("chalk");
const prompt = require("prompt-sync")();
const { welcome } = require("./welcome");
const hangman = require("./game");

let gamesPlayed = [];

async function startHangmanGame() {
  await welcome();

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
      gamesPlayed.push({ name: hangman.word, outcome: "win" });
      break;
    }

    if (hangman.checkLoss()) {
      console.log(chalk.red(`Sorry, you lost! The word was ${hangman.word}`));
      gamesPlayed.push({ name: hangman.word, outcome: "loss" });
      break;
    }

    if (hangman.lifespan.length === 0) {
      console.log(chalk.red("'¯\\_(:/)_/¯'"));
      console.log(chalk.red("Game over!"));
      gamesPlayed.push({ name: hangman.word, outcome: "loss" });
      break;
    }
  }

  // Display game over emoji after games played
  console.log("\nGames Played:");
  gamesPlayed.forEach((game) => {
    console.log(`${game.name} - ${game.outcome}`);
  });

  if (gamesPlayed.some((game) => game.outcome === "loss")) {
    console.log(chalk.red.bold("'¯\\_(:/)_/¯'"));
    console.log(chalk.red.bold("Game over!"));
  }
}

startHangmanGame();
