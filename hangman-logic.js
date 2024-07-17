const chalk = require("chalk");

const hangman = {
  topics: {
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
  },

  word: "",
  guessed: [],
  attempts: 6,
  lifespan: "♥♥♥♥♥♥".split(""),

  startGame(topic) {
    this.word =
      this.topics[topic][Math.floor(Math.random() * this.topics[topic].length)];
    this.guessed = [];
    this.attempts = 6;
    this.lifespan = "♥♥♥♥♥♥".split("");
    console.log(
      chalk.cyanBright.bold("Starting a new game with topic: ") +
        chalk.magentaBright.bold(topic)
    );
    console.log(chalk.cyanBright.bold("Good luck!"));
  },

  guessLetter(letter) {
    if (this.guessed.includes(letter)) {
      console.log(chalk.yellowBright(`You already guessed ${letter}!`));
      return;
    }

    this.guessed.push(letter);

    if (!this.word.includes(letter)) {
      this.attempts--;
      console.log(
        chalk.redBright(`Incorrect! You have ${this.attempts} attempts left.`)
      );
      this.lifespan.pop();
    } else {
      console.log(chalk.greenBright(`Correct!`));
    }
    console.log(chalk.blueBright.bold(`Current word: ${this.displayWord()}`));
    console.log(
      chalk.magentaBright.bold(`Lifespan: ${this.displayLifespan()}`)
    );
  },

  checkWin() {
    if (this.word.split("").every((letter) => this.guessed.includes(letter))) {
      console.log(chalk.greenBright.bold("Congratulations! You won!"));
      return true;
    }
    return false;
  },

  checkLoss() {
    if (this.attempts === 0) {
      console.log(
        chalk.redBright.bold(`Game over! The word was: ${this.word}`)
      );
      return true;
    }
    return false;
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
