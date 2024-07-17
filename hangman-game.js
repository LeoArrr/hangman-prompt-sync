const chalk = require("chalk");
const prompt = require("prompt-sync")();
const hangman = require("./hangman-logic");
const { startNumberGuessingGame } = require("./number-game-logic");

let gamesPlayed = [];

function startHangmanGame() {
  console.log(chalk.cyan("Choose a topic: Music, City, or Animal"));

  const topic = prompt(chalk.magenta("Enter a topic: ")).toLowerCase();

  if (!["music", "city", "animal"].includes(topic)) {
    console.log(chalk.red("Invalid topic. Exiting game."));
    process.exit();
  }

  hangman.startGame(topic);

  console.log(chalk.blue(hangman.displayWord()));
  console.log(
    chalk.magentaBright.bold(`Lifespan: ${hangman.displayLifespan()}`)
  );

  while (true) {
    const letter = prompt(chalk.magenta("Guess a letter: ")).toLowerCase();

    hangman.guessLetter(letter);

    console.log(chalk.blue(hangman.displayWord()));
    console.log(
      chalk.magentaBright.bold(`Lifespan: ${hangman.displayLifespan()}`)
    );

    if (hangman.checkWin()) {
      gamesPlayed.push({ name: hangman.word, outcome: "win" });
      console.log("\nGames Played:");
      gamesPlayed.forEach((game) => {
        console.log(`${game.name} - ${game.outcome}`);
      });
      console.log("\n");

      console.log(
        chalk.greenBright(
          "Congratulations! You won the hangman game. Press enter to play the number guessing game..."
        )
      );
      prompt(chalk.greenBright(""));
      startNumberGuessingGame();
      break;
    }

    if (hangman.checkLoss()) {
      gamesPlayed.push({ name: hangman.word, outcome: "loss" });
      console.log("\nGames Played:");
      gamesPlayed.forEach((game) => {
        console.log(`${game.name} - ${game.outcome}`);
      });
      console.log("\n");
      console.log(
        chalk.red("You lost the hangman game. Better luck next time!")
      );
      break;
    }
  }
}

startHangmanGame();
