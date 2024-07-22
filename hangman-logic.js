const chalk = require("chalk");

// Color variables
const brightRed = chalk.hex("#FF0000");
const brightOrange = chalk.hex("#FFA500");
const correct = chalk.bold.green;
const gameOver = chalk.red;
const brightWhite = chalk.whiteBright;

// Available topics and words
const topics = {
  music: [
    "guitar",
    "piano",
    "violin",
    "drums",
    "bass",
    "cello",
    "flute",
    "trumpet",
    "saxophone",
    "harmonica",
    "microphone",
    "headphones",
    "amplifier",
    "mixer",
    "recorder",
    "speaker",
    "turntable",
    "cdplayer",
    "radio",
    "orchestra",
    "symphony",
    "opera",
    "concert",
    "festival",
    "jazz",
    "rock",
    "pop",
    "classical",
    "hiphop",
  ],
  city: [
    "paris",
    "rome",
    "london",
    "newyork",
    "tokyo",
    "beijing",
    "sydney",
    "moscow",
    "cairo",
    "istanbul",
    "berlin",
    "madrid",
    "amsterdam",
    "prague",
    "athens",
    "dubai",
    "shanghai",
    "mumbai",
    "buenosaires",
    "rio",
  ],
  animal: [
    "lion",
    "tiger",
    "bear",
    "elephant",
    "giraffe",
    "zebra",
    "monkey",
    "kangaroo",
    "penguin",
    "koala",
    "snake",
    "crocodile",
    "shark",
    "octopus",
    "butterfly",
    "frog",
    "toad",
    "squirrel",
    "rabbit",
    "hedgehog",
  ],
};

class Hangman {
  constructor() {
    this.word = "";
    this.guessed = [];
    this.attempts = 6;
    this.lifespan = ["♥", "♥", "♥", "♥", "♥", "♥"];
  }

  startGame(topic) {
    if (!topics[topic]) {
      console.log(gameOver(`Topic '${topic}' not found.\n`));
      return;
    }

    this.word = topics[topic][Math.floor(Math.random() * topics[topic].length)];
    this.guessed = [];
    this.attempts = 6;
    this.lifespan = ["♥", "♥", "♥", "♥", "♥", "♥"];
  }

  guessLetter(letter) {
    if (this.guessed.includes(letter)) {
      console.log(brightOrange(`You already guessed '${letter}'!\n`));
      return;
    }

    this.guessed.push(letter);

    if (!this.word.includes(letter)) {
      this.attempts--;
      console.log(
        brightOrange(`\nIncorrect! You have ${this.attempts} attempts left.`)
      );
      this.lifespan.pop();
    } else {
      console.log(correct("Correct!"));
    }

    console.log(brightWhite(`Current word: ${this.displayWord()}\n`));
    console.log(brightRed(this.lifespan.join(" ")));

    if (this.word.split("").every((letter) => this.guessed.includes(letter))) {
      console.log(correct("Congratulations! You won!\n"));
      return "win";
    } else if (this.attempts === 0) {
      console.log(gameOver(`Game over! The word was: ${this.word}\n`));
      return "loss";
    }

    return "continue";
  }

  displayWord() {
    return this.word
      .split("")
      .map((letter) => (this.guessed.includes(letter) ? letter : "_"))
      .join(" ");
  }
}

module.exports = Hangman;
