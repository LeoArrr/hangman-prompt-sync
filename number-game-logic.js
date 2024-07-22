class NumberGuessingGame {
  constructor() {
    this.numberToGuess = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    this.maxAttempts = 10;
    this.attemptsLeft = this.maxAttempts;
  }

  getReaction() {
    const reactions = [
      "System error detected. Initiating diagnostic protocols...",
      "Warning: Security breach imminent. Proceed with caution.",
      "Analyzing potential outcomes...",
      "Error: Data corruption detected. Attempting recovery...",
      "Critical malfunction identified. Engaging troubleshooting sequence...",
      "Alert: Unauthorized access attempt detected. Locking down systems...",
      "Processing request... Anomaly detected, further analysis required.",
      "Warning: Resource depletion imminent. Initiating emergency protocols...",
      "Error: System overload imminent. Scaling down processes...",
      "Diagnostic mode activated. Evaluating system integrity...",
      "Alert: Communication disruption. Re-establishing connection...",
      "Error: Firmware conflict detected. Deploying repair mechanisms...",
      "Warning: Excessive heat detected. Cooling systems engaged...",
      "System alert: Unscheduled reboot initiated. Analyzing cause...",
    ];
    return reactions[Math.floor(Math.random() * reactions.length)];
  }

  getHint() {
    const hints = [
      "Proximity sensors active. Target acquisition improving...",
      "Navigational algorithms converging...",
      "Signal clarity increasing...",
      "System optimization detected. Nearing target...",
      "Trajectory alignment achieved. Final approach initiated...",
      "Power levels stabilizing. System functionality improving...",
      "Operational efficiency increasing. Preparing for final phase...",
      "Navigation path recalibrated. Proceeding with enhanced accuracy...",
      "Signal strength optimal. Close to achieving objective...",
      "Engagement protocols active. Monitoring for final adjustments...",
      "System diagnostics confirm optimal conditions. Moving forward...",
      "Proximity indicators green. Awaiting further instructions...",
      "Mission parameters locked. Advancing to final execution phase...",
      "Operational thresholds met. Preparing for next phase...",
    ];
    return hints[Math.floor(Math.random() * hints.length)];
  }

  guessNumber(guess) {
    if (guess === this.numberToGuess) {
      return "Congratulations! You've guessed the number!";
    } else {
      this.attemptsLeft -= 1;
      if (this.attemptsLeft <= 0) {
        return `Game over! The number was ${this.numberToGuess}.`;
      }

      let feedback = `Incorrect guess. ${this.attemptsLeft} attempts left.`;

      // Optionally provide hints and reactions based on proximity to the correct number
      const distance = Math.abs(this.numberToGuess - guess);
      if (distance <= 10) {
        feedback += ` ${this.getHint()}`;
      } else {
        feedback += ` ${this.getReaction()}`;
      }

      return feedback;
    }
  }

  getRemainingAttempts() {
    return this.attemptsLeft;
  }

  getNumberToGuess() {
    return this.numberToGuess;
  }
}

module.exports = { NumberGuessingGame };
