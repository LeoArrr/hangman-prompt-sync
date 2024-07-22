const chalk = require("chalk");
const prompt = require("prompt-sync")();
const Hangman = require("./hangman-logic.js");
const { startNumberGuessingGame } = require("./number-main.js");

// Color variables
const brightRed = chalk.hex("#FF0000");
const bold = chalk.bold.green;
const correct = chalk.bold.green;
const gameOver = chalk.red;
const brightWhite = chalk.whiteBright;
const brightPink = chalk.hex("#FF69B4");
const boldOrange = chalk.hex("#FFA500").bold;

// Track games played
let gamesPlayed = [];

function startHangmanGame() {
  console.log(chalk.bgCyanBright.black("Welcome to Hangman!\n"));

  console.log(brightPink("Choose a topic: Music, City, or Animal"));
  const topic = prompt(brightPink("Enter a topic: ")).toLowerCase();

  if (!["music", "city", "animal"].includes(topic)) {
    console.log(gameOver("Invalid topic. Exiting game.\n"));
    process.exit();
  }

  // Create an instance of the Hangman class
  const hangmanGame = new Hangman();
  hangmanGame.startGame(topic);

  console.log(bold(`\nStarting a new game with topic: ${topic}`));
  console.log(bold("Good luck!\n"));

  console.log(brightWhite(`Current word: ${hangmanGame.displayWord()}\n`));
  console.log(brightRed(hangmanGame.lifespan.join(" "))); // Use the lifespan directly

  while (true) {
    const letter = prompt(brightPink("Guess a letter: ")).toLowerCase();
    const result = hangmanGame.guessLetter(letter);

    if (result === "win") {
      gamesPlayed.push({ name: hangmanGame.word, outcome: "win" });

      console.log(brightRed("\nGame Played:"));
      gamesPlayed.forEach((game) => {
        console.log(brightRed(`${game.name} - ${game.outcome}\n`));
      });
      console.log("\n");

      console.log(correct("Congratulations! You won the hangman game.\n"));
      prompt(brightWhite("Press enter to play the number guessing game...\n"));
      startNumberGuessingGame();
      break;
    }

    if (result === "loss") {
      gamesPlayed.push({ name: hangmanGame.word, outcome: "loss" });

      console.log(boldOrange("\nGame Played:"));
      gamesPlayed.forEach((game) => {
        console.log(boldOrange(`${game.name} - ${game.outcome}\n`));
      });
      console.log("\n");

      console.log(
        gameOver("You lost the hangman game. Better luck next time!\n")
      );
      break;
    }
  }
}

// Start the Hangman game
startHangmanGame();
