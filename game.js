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
      "peaker",
      "turntable",
      "cdplayer",
      "radio",
      "orchestra",
      "ymphony",
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
      "adrid",
      "amsterdam",
      "prague",
      "athens",
      "dubai",
      "hanghai",
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
      "quirrel",
      "rabbit",
      "hedgehog",
    ],
  },

  word: "",
  guessed: [],
  attempts: 6,
  lifespan: "¯\\_(:/)_/¯".split(""),

  startGame(topic) {
    this.word =
      this.topics[topic][Math.floor(Math.random() * this.topics[topic].length)];
    this.guessed = [];
  },

  guessLetter(letter) {
    if (this.guessed.includes(letter)) {
      console.log(`You already guessed ${letter}!`);
      return;
    }

    this.guessed.push(letter);

    if (!this.word.includes(letter)) {
      this.attempts--;
      console.log(`Incorrect! You have ${this.attempts} attempts left.`);
      this.lifespan = this.lifespan.slice(0, -2);
    } else {
      console.log(`Correct!`);
    }
  },

  checkWin() {
    return this.word.split("").every((letter) => this.guessed.includes(letter));
  },

  checkLoss() {
    return this.attempts === 0;
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
