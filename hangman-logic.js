const chalk = require("chalk");

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

let hangman = {
  word: "",
  guessed: [],
  attempts: 6,
  lifespan: ["♥", "♥", "♥", "♥", "♥", "♥"],

  startGame(topic) {
    this.word = topics[topic][Math.floor(Math.random() * topics[topic].length)];
    this.guessed = [];
    this.attempts = 6;
    this.lifespan = ["♥", "♥", "♥", "♥", "♥", "♥"];
  },

  guessLetter(letter) {
    if (this.guessed.includes(letter)) {
      console.log(chalk.hex("#FF00FF")(`You already guessed ${letter}!`));
      return;
    }

    this.guessed.push(letter);

    if (!this.word.includes(letter)) {
      this.attempts--;
      console.log(
        chalk.hex("#FF00FF")(
          `Incorrect! You have ${this.attempts} attempts left.`
        )
      );
      this.lifespan.pop();
    } else {
      console.log(chalk.hex("#FF00FF")("Correct!"));
    }

    console.log(chalk.hex("#FF00FF")(`Current word: ${this.displayWord()}`));
    console.log(chalk.hex("#FF00FF")(`Lifespan: ${this.displayLifespan()}`));

    if (this.word.split("").every((letter) => this.guessed.includes(letter))) {
      console.log(chalk.hex("#FF00FF")("Congratulations! You won!"));
    } else if (this.attempts === 0) {
      console.log(
        chalk.hex("#FF00FF")(`Game over! The word was: ${this.word}`)
      );
    }
  },

  displayWord() {
    return this.word
      .split("")
      .map((letter) => (this.guessed.includes(letter) ? letter : "_"))
      .join(" ");
  },

  displayLifespan() {
    return this.lifespan.join("");
  },
};

module.exports = hangman;
