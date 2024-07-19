# Console Games Collection

## Overview

This project includes two console-based games implemented in JavaScript: Hangman and Number Guessing. Both games use the `chalk` library for colored text output and `prompt-sync` for user input. The project is divided into two main components for each game: the game logic and the user interface.

---

## Hangman Game

### Overview

The Hangman game allows players to guess letters in a word, with a limited number of attempts. The game features a colorful console interface to enhance user experience.

### Files

- **`hangman-main.js`**: Manages the user interface and game flow for Hangman.
- **`hangman-logic.js`**: Contains the core game logic for Hangman.

---

### 15.07.2024

#### `hangman-main.js`

This file handles the user interface and the overall flow of the Hangman game. It manages the interaction with the user, including starting the game, processing guesses, and providing feedback.

**Key Features**

- **Color Variables**:

  - `brightRed`: `#FF0000` - Displays incorrect guesses and lifespan.
  - `bold`: Bold green - For correct guesses and game announcements.
  - `gameOver`: Red - For game over messages.
  - `brightWhite`: White bright - Displays the current word.
  - `brightPink`: Pink - Used for prompts and instructions.
  - `boldOrange`: Bold orange - Used for repeated guesses and game statistics.

- **Game Flow**:
  - Welcomes the user and prompts for a topic.
  - Starts a new game with the selected topic.
  - Handles user guesses and updates the game state.
  - Displays game status, including the current word and remaining lifespan.
  - Provides feedback on win or loss conditions and transitions to another game if applicable.

---

### 16.08.2024

#### `hangman-logic.js`

This file contains the core logic of the Hangman game. It includes methods for initializing the game, processing guesses, and updating the game state.

**Key Features**

- **Color Variables**:

  - `brightRed`: `#FF0000` - Displays lifespan.
  - `brightOrange`: `#FFA500` - Handles repeated guesses and incorrect guesses.
  - `correct`: Bold green - For correct guesses.
  - `gameOver`: Red - For game over messages.
  - `brightWhite`: White bright - Displays the current word.

- **Game Logic**:
  - **`startGame(topic)`**: Initializes the game with a random word from the selected topic.
  - **`guessLetter(letter)`**: Processes a user's letter guess, updates the game state, and provides feedback.
  - **`displayWord()`**: Returns the current state of the word with guessed letters revealed and unguessed letters as underscores.

---

## Number Guessing Game

### Overview

The Number Guessing game challenges players to guess a randomly chosen number between 1 and 100 within a limited number of attempts. The game provides feedback on guesses and displays results in a colorful console interface.

### Files

- **`main.js`**: Manages the user interface and game flow for Number Guessing.
- **`number-game-logic.js`**: Contains the core game logic for Number Guessing.

---

### 17.07.2024

#### `main.js`

This file is responsible for managing the user interface and game flow for the Number Guessing game. It handles user input, provides feedback, and displays game results.

**Key Features**

- **Color Variables**:

  - `brightRed`: `#FF0000` - Displays errors and invalid inputs.
  - `bold`: Bold green - For correct guess messages and game announcements.
  - `gameOver`: Red - For game over messages.
  - `brightWhite`: White bright - Displays remaining attempts.
  - `brightPink`: Pink - For prompts and instructions.
  - `boldOrange`: Bold orange - Provides additional feedback on guesses.

- **Feedback Mechanism**:

  - **`provideFeedback(guess, numberToGuess)`**: Provides a reaction or hint based on the difference between the user's guess and the target number.
  - **`printGameOverMessage(isLoss, numberToGuess)`**: Displays the final message based on whether the game ended in a win or loss.

- **Game Flow**:
  - Welcomes the user and prompts for guesses.
  - Handles user input, including validation and range checks.
  - Uses `provideFeedback` for additional hints or reactions.
  - Displays the number of remaining attempts and game results.

---

### 18.08.2024

#### `number-game-logic.js`

This file contains the core logic of the Number Guessing game. It includes methods for initializing the game, processing guesses, and managing game state.

**Key Features**

- **Number Guessing Logic**:
  - **`constructor()`**: Initializes the game with a random number between 1 and 100 and sets the maximum number of attempts.
  - **`guessNumber(guess)`**: Processes a user's guess, updates the number of attempts left, and returns a message based on the guess result.
  - **`getRemainingAttempts()`**: Returns the number of attempts left.
  - **`getNumberToGuess()`**: Returns the number to be guessed.

---

---

## 19.07.2024

### Code Refactoring and Adjustments

On this date, significant improvements were made to enhance code readability and maintainability for both games. Below are the details of the changes:

#### Refactoring Overview

**Hangman Game (`hangman-main.js` and `hangman-logic.js`)**

- **Code Organization**:

  - Improved modularity by consolidating similar functionalities into functions.
  - Added comments for better understanding of the game flow and logic.

- **Variable and Function Naming**:

  - Updated variable and function names to be more descriptive and intuitive.

- **Error Handling**:

  - Enhanced error messages to be more user-friendly and informative.

- **User Interface**:
  - Refined console output for a clearer and more engaging user experience.

**Number Guessing Game (`main.js` and `number-game-logic.js`)**

- **Code Optimization**:

  - Simplified logic for handling user input and game feedback.
  - Improved the clarity of feedback messages for better user guidance.

- **Feedback Mechanism**:

  - Adjusted the feedback mechanism to provide more relevant hints and reactions based on the guess.

- **Game Flow**:
  - Made adjustments to ensure a smoother game flow and more accurate game state updates.

**Key Changes**

- **Hangman Game**:

  - Enhanced function definitions and streamlined game state management.
  - Improved readability of feedback and game status updates.

- **Number Guessing Game**:
  - Refactored the main game loop and feedback functions for clarity.
  - Adjusted feedback messages to align with game state more accurately.

**Benefits of Refactoring**

- **Increased Maintainability**:
  - The refactored code is easier to understand, modify, and extend in the future.
- **Improved Readability**:

  - Clearer variable names and function definitions make the code more accessible to new contributors.

- **Enhanced User Experience**:
  - More intuitive feedback and game interactions improve overall user satisfaction.

---

## Installation

1. Clone the repository
2. Navigate to the project directory
