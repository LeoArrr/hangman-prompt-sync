const prompt = require("prompt-sync")();
const hangman = require("./game");

console.log("Welcome to Hangman!");
console.log("Choose a topic: Music, City, or Animal");

const topic = prompt("Enter a topic: ").toLowerCase();

if (!["music", "city", "animal"].includes(topic)) {
  console.log("Invalid topic. Exiting game.");
  process.exit();
}

hangman.startGame(topic);

console.log(hangman.displayWord());
console.log(hangman.displayLifespan());

while (true) {
  const letter = prompt("Guess a letter: ").toLowerCase();

  hangman.guessLetter(letter);

  console.log(hangman.displayWord());
  console.log(hangman.displayLifespan());

  if (hangman.checkWin()) {
    console.log(" Congratulations! You won!");
    break;
  }

  if (hangman.checkLoss()) {
    console.log(` Sorry, you lost! The word was ${hangman.word}`);
    break;
  }

  if (hangman.lifespan.length === 0) {
    console.log("'¯\\_(:/)_/¯'");
    console.log(" Game over!");
    break;
  }
}
