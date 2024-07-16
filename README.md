# Hangman Game 

## Day 1: July 15, 2024

### Project Overview
Today, I began development on a Hangman game using JavaScript. The game allows users to select a topic (Music, City, or Animal) and guess letters to uncover a randomly chosen word from that topic.

### Features Implemented
- Created a `hangman` object with properties for topics, word, guessed letters, attempts, and lifespan.
- Implemented the `startGame` method to select a random word from the chosen topic and reset the game state.
- Developed the `guessLetter` method to handle user input, validate the letter against the word, and update the game state accordingly.
- Implemented `checkWin` and `checkLoss` methods to determine game outcomes.
- Created `displayWord` and `displayLifespan` methods to show the current game status.

### Code Structure
The code is organized into two files:
- **game.js**: Contains the `hangman` object and its associated methods.
- **index.js**: Manages user input and game flow logic.

## Day 2: July 16, 2024

### Refining Game Logic
Today, I refined the game logic to enhance challenge and enjoyment:
- Implemented a decreasing lifespan display using ASCII art.
- Updated the `guessLetter` method to decrement attempts and lifespan on incorrect guesses.
- Prevented duplicate letter guesses by users.

### Additional Features
I also added features to improve user experience:
- Implemented a welcome message and topic selection prompt.
- Added a congratulatory message upon winning the game.
- Displayed the correct answer when the user loses the game.
