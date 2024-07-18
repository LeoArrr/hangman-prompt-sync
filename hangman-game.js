const chalk = require("chalk");
const prompt = require("prompt-sync")();
const hangman = require("./hangman-logic.js");
const { startNumberGuessingGame } = require("./number-game-logic.js");

let gamesPlayed = [];

function startHangmanGame() {
  console.log(chalk.hex("#FF00FF")("Welcome to Hangman!"));

  console.log(chalk.hex("#33CCFF")("Choose a topic: Music, City, or Animal"));
  const topic = prompt(chalk.hex("#FF69B4")("Enter a topic: ")).toLowerCase();

  if (!["music", "city", "animal"].includes(topic)) {
    console.log(chalk.hex("#FF00FF")("Invalid topic. Exiting game."));
    process.exit();
  }

  hangman.startGame(topic);

  console.log(chalk.hex("#FF00FF")(`Starting a new game with topic: ${topic}`));
  console.log(chalk.hex("#FF00FF")("Good luck!"));

  console.log(chalk.hex("#FF00FF")(hangman.displayWord()));
  console.log(chalk.hex("#FF00FF")(`Lifespan: ${hangman.displayLifespan()}`));

  while (true) {
    const letter = prompt(
      chalk.hex("#FF69B4")("Guess a letter: ")
    ).toLowerCase();
    hangman.guessLetter(letter);

    console.log(chalk.hex("#FF00FF")(hangman.displayWord()));
    console.log(chalk.hex("#FF00FF")(`Lifespan: ${hangman.displayLifespan()}`));

    if (
      hangman.word.split("").every((letter) => hangman.guessed.includes(letter))
    ) {
      gamesPlayed.push({ name: hangman.word, outcome: "win" });

      console.log(chalk.hex("#FF00FF")("\nGames Played:"));
      gamesPlayed.forEach((game) => {
        console.log(chalk.hex("#FF00FF")(`${game.name} - ${game.outcome}`));
      });
      console.log("\n");

      console.log(
        chalk.hex("#FF00FF")("Congratulations! You won the hangman game.")
      );
      prompt(
        chalk.hex("#33CCFF")("Press enter to play the number guessing game...")
      );
      startNumberGuessingGame();
      break;
    }

    if (hangman.attempts === 0) {
      gamesPlayed.push({ name: hangman.word, outcome: "loss" });

      console.log(chalk.hex("#FF00FF")("\nGames Played:"));
      gamesPlayed.forEach((game) => {
        console.log(chalk.hex("#FF00FF")(`${game.name} - ${game.outcome}`));
      });
      console.log("\n");

      console.log(
        chalk.hex("#FF00FF")(
          "You lost the hangman game. Better luck next time!"
        )
      );
      break;
    }
  }
}

startHangmanGame();
