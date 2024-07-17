const chalk = require("chalk");
const chalkAnimation = require("chalk-animation");

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const neonTitle = chalkAnimation.neon("Welcome to Hangman! \n");

  await sleep();
  neonTitle.stop();

  console.log(`
    ${chalk.bgBlue("HOW TO PLAY")} 
    Guess the letters to complete the word.
    You have limited attempts before the hangman gets completed.
  `);
}

module.exports = {
  welcome,
};
