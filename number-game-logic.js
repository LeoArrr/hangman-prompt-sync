const chalk = require("chalk");
const prompt = require("prompt-sync")();

let numberToGuess;
let attempts = 0;

function startNumberGuessingGame() {
  console.log(chalk.cyan("Welcome to the Number Guessing Game!"));
  console.log(chalk.magenta("I'm thinking of a number between 1 and 100..."));

  numberToGuess = Math.floor(Math.random() * 100) + 1;

  while (true) {
    const guess = parseInt(
      prompt(chalk.magentaBright("Enter your guess (or 'q' to quit): "))
    );

    if (guess === "q") {
      console.log(chalk.red("Goodbye!"));

      break;
    }

    if (isNaN(guess)) {
      console.log(chalk.red("Invalid input. Please enter a number."));

      continue;
    }

    attempts++;

    const reactions = [
      "Woah, that's a bold move!",

      "Hmm, interesting choice...",

      "You're really going for it, aren't you?",

      "Oh, so close... or not?",

      "That's a unique guess, I'll give you that!",

      "You're on a roll!",

      "Uh-oh, did you really think that would work?",

      "Keep trying, you got this!",

      "That's not even close, but I love the enthusiasm!",

      "You're getting closer... or are you?",

      "Whoa, that's a big swing and a miss!",

      "I'm not sure what you're doing, but it's working!",

      "You're a rebel, aren't you?",

      "That's a gutsy move!",

      "I didn't see that coming!",

      "You're a wild card!",

      "That's a long shot, but I like your style!",

      "You're really testing the limits!",

      "That's a... creative guess?",

      "I'm impressed by your confidence!",

      "You're not afraid to take risks, are you?",

      "That's a shot in the dark!",

      "You're a master of unpredictability!",

      "I'm not sure if that's genius or madness!",

      "You're keeping me on my toes!",

      "That's a bold strategy!",

      "You're a true original!",

      "I've never seen anyone try that before!",

      "You're a risk-taker, aren't you?",

      "That's a... let's call it a 'calculated risk'?",

      "You're not holding back, are you?",

      "That's a daring move!",

      "You're a force to be reckoned with!",

      "I'm not sure what to make of that guess!",

      "You're a puzzle, wrapped in a mystery!",

      "That's a... unique perspective!",

      "You're a true maverick!",

      "I'm intrigued by your thought process!",

      "You're a master of misdirection!",

      "That's a clever guess!",

      "You're a sly one, aren't you?",

      "I didn't expect that from you!",

      "You're a chameleon, always changing!",

      "That's a... let's call it a 'lateral thinking'?",

      "You're a true innovator!",

      "I'm not sure if that's a good idea, but I admire the spirit!",

      "You're a trailblazer, aren't you?",

      "That's a... bold experiment!",

      "You're a true original, a one-of-a-kind!",

      "I'm fascinated by your approach!",

      "You're a true artist, always pushing boundaries!",

      "That's a... daring hypothesis!",

      "You're a true pioneer, always exploring new frontiers!",

      "I'm not sure what to make of that, but I love it!",

      "You're a true free spirit, always following your heart!",

      "That's a... let's call it a 'creative solution'?",

      "You're a true visionary, always seeing the big picture!",

      "I'm impressed by your fearlessness!",

      "You're a true rebel, always challenging the status quo!",

      "That's a... gutsy call!",

      "You're a true leader, always taking charge!",

      "I'm not sure if that's a good idea, but I admire the courage!",

      "You're a true adventurer, always seeking new horizons!",

      "That's a... bold prediction!",

      "You're a true iconoclast, always breaking the mold!",

      "I'm fascinated by your confidence!",

      "You're a true game-changer, always shaking things up!",

      "That's a... daring prophecy!",

      "You're a true trendsetter, always ahead of the curve!",

      "I'm not sure what to make of that, but I love the enthusiasm!",

      "You're a true firecracker, always exploding with energy!",

      "That's a... let's call it a 'creative gamble'?",

      "You're a true sparkplug, always igniting the spark!",

      "I'm impressed by your audacity!",

      "You're a true trailblazer, always blazing new trails!",

      "That's a... gutsy move, but I love it!",

      "You're a true dynamo, always generating excitement!",

      "I'm not sure if that's a good idea, but I admire the spunk!",

      "You're a true whirlwind, always stirring things up!",

      "That's a... bold declaration!",

      "You're a true force of nature, always unstoppable!",

      "I'm fascinated by your fearlessness!",

      "You're a true lightning bolt, always striking with energy!",
    ];

    let hints = [
      "Getting warmer...",
      "You're on the right track!",
      "Try going higher...",
      "You're getting close, but not quite...",
      "That's a good start!",
      "You're on a roll!",
      "Think outside the box...",
      "You're almost there!",
      "Keep going, you're on the right path!",
      "That's a creative guess!",
      "You're really close, but not quite...",
      "Try a different approach...",
      "You're getting closer, but...",
      "That's a bold move!",
      "You're on the edge of something big!",
      "Keep pushing the limits!",
      "You're almost there, but...",
    ];

    if (guess - numberToGuess > 15 || numberToGuess - guess > 15) {
      console.log(
        chalk.red(reactions[Math.floor(Math.random() * reactions.length)])
      );
    } else {
      console.log(chalk.blue(hints[Math.floor(Math.random() * hints.length)]));
      hints = hints.filter(
        (hint) => hint !== hints[Math.floor(Math.random() * hints.length)]
      );
    }

    if (guess === numberToGuess) {
      console.log(
        chalk.greenBright(
          `Congratulations! You found the number in ${attempts} attempts.`
        )
      );
      break;
    }
  }

  console.log(chalk.greenBright("Press enter to exit..."));
  prompt(chalk.greenBright(""));
}

module.exports = { startNumberGuessingGame };
