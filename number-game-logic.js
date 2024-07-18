const chalk = require("chalk");
const prompt = require("prompt-sync")();

let numberToGuess;
let attempts = 0;

function startNumberGuessingGame() {
  console.log(
    chalk.cyan(`
██████╗ ██╗   ██╗██████╗ ███████╗███████╗
██╔══██╗██║   ██║██╔══██╗██╔════╝██╔════╝
██████╔╝██║   ██║██████╔╝█████╗  ███████╗
██╔══██╗██║   ██║██╔══██╗██╔══╝  ╚════██║
██║  ██║╚██████╔╝██║  ██║███████╗███████║
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
`)
  );
  console.log(chalk.magenta("Initializing secure number guessing protocol..."));

  numberToGuess = Math.floor(Math.random() * 100) + 1;

  const neon = chalk.hex("#FF00FF");

  const reactions = [
    "System error detected. Initiating diagnostic protocols...",
    "Warning: Security breach imminent. Proceed with caution.",
    "Analyzing potential outcomes...",
    "Error: Data corruption detected. Attempting recovery...",
    "Access denied. Please retry with valid credentials.",
    "Processing request...",
    "Error: Unexpected input detected. Please try again.",
    "System overload. Implementing load balancing...",
    "Warning: System integrity compromised. Implementing firewall measures...",
    "Analyzing threat vectors...",
    "Data transfer complete.",
    "Error: Invalid command. Reverting to default settings...",
    "System reboot initiated...",
    "Warning: Anomaly detected in neural network. Performing neural recalibration...",
    "Error: Critical failure in algorithm. Attempting to recover...",
    "Initiating self-diagnostic sequence...",
    "System error. Reboot required.",
    "Processing... Please wait.",
    "Error: Inconsistent data format detected. Verifying data integrity...",
    "Analyzing quantum entanglement patterns...",
    "Data processing complete.",
    "Error: Insufficient memory. Offloading data...",
    "Warning: System compromised. Evacuate immediately.",
    "Initializing quantum encryption protocols...",
    "Error: Input parameters out of bounds. Adjusting constraints...",
    "Performing predictive analysis...",
    "Error: Network congestion detected. Optimizing data flow...",
    "System operation nominal. Proceed with task execution.",
    "Error: Data transmission failure. Reattempting communication...",
    "Optimizing algorithm efficiency...",
    "Error: Data fragmentation detected. Reassembling data packets...",
    "Calculating quantum probability waves...",
    "Error: Unknown command. Please input valid command.",
    "Analyzing spatial-temporal coordinates...",
    "Data decryption in progress...",
    "Error: Unrecognized input format. Adjusting input validation...",
    "System maintenance in progress. Please standby.",
    "Error: Unexpected anomaly detected. Initiating emergency shutdown...",
    "Scanning environmental variables...",
    "Error: Data inconsistency detected. Resolving conflicts...",
    "Warning: System vulnerability detected. Patching security holes...",
    "Analyzing biometric feedback...",
    "Error: Access denied. Authorization required.",
    "System synchronization in progress...",
    "Error: Algorithmic deadlock detected. Resolving deadlock...",
    "Analyzing cosmic radiation patterns...",
    "Data corruption resolved.",
    "Error: System overload. Implementing energy conservation measures...",
    "Initializing artificial intelligence subsystems...",
    "Error: Communication breakdown. Reestablishing communication...",
    "Quantum entanglement synchronization complete.",
    "Error: Data loss detected. Recovering lost data...",
    "Analyzing synaptic response patterns...",
    "Error: Anomaly detected in neural network. Rebooting neural connections...",
    "System calibration in progress...",
    "Error: Algorithmic divergence detected. Realigning algorithms...",
    "Analyzing gravitational anomalies...",
    "Data transfer error. Reattempting data transfer...",
    "Error: Quantum fluctuation detected. Stabilizing quantum states...",
    "Initiating deep learning protocols...",
    "Error: Memory leak detected. Purging memory cache...",
    "Analyzing genetic data sequences...",
    "Data encryption in progress...",
    "Error: System shutdown imminent. Saving work...",
    "Scanning subspace frequencies...",
    "Error: Logical paradox detected. Resolving paradox...",
    "Analyzing dark matter properties...",
    "System upgrade complete. Please reboot.",
    "Error: Electromagnetic interference detected. Shielding systems activated...",
    "Verifying blockchain transaction...",
    "Error: System crash detected. Rebooting system...",
    "Analyzing wave function collapse...",
    "Data integrity check in progress...",
    "Error: Temporal anomaly detected. Adjusting time synchronization...",
    "Scanning for extraterrestrial signals...",
    "Error: Quantum tunneling failure. Resetting quantum tunnel...",
    "Analyzing wave-particle duality...",
    "System error. Rebooting neural network...",
    "Error: Cosmic background radiation anomaly detected. Investigating...",
    "Analyzing gravitational wave patterns...",
    "Data transmission secure. Initiating data compression...",
    "Error: System deadlock. Initiating system-wide reset...",
    "Quantum entanglement matrix verified...",
    "Error: Network communication failure. Reconnecting...",
    "Analyzing neutrino oscillations...",
    "System efficiency optimized. Proceed with operation.",
    "Error: Unknown system error. Initiating comprehensive system check...",
    "Initiating quantum superposition computation...",
    "Error: Data transmission interruption. Resuming transmission...",
    "Analyzing cosmic microwave background...",
    "System update available. Installing updates...",
    "Error: Dimensional rift detected. Stabilizing dimensional fabric...",
    "Analyzing multi-dimensional data sets...",
    "Data encryption complete. Secure transmission established.",
    "Error: Quantum decoherence detected. Reestablishing quantum coherence...",
    "Initiating deep space navigation protocols...",
    "Error: Gravitational lensing anomaly detected. Correcting trajectory...",
    "Analyzing quantum teleportation patterns...",
    "System diagnostic complete. No issues found.",
    "Error: Unidentified signal detected. Tracing signal source...",
    "Analyzing interstellar dust composition...",
    "System restoration in progress...",
    "Error: Temporal causality violation detected. Temporal correction initiated...",
    "Verifying hyperdrive calibration...",
    "Error: Data anomaly detected. Debugging data...",
    "Analyzing quantum phase transition...",
    "System initialization complete. Ready for task execution.",
    "Error: Quantum computing error. Reinitializing quantum processor...",
    "Error: System overload. Implementing fail-safe protocols...",
    "System synchronization complete. All systems operational.",
    "Error: Neural interface malfunction. Rebooting neural interface...",
    "Analyzing subspace resonance frequencies...",
    "Data analysis in progress. Estimated completion time: [time estimate].",
    "Error: Gravitational wave interference detected. Shielding systems engaged...",
    "System power failure detected. Initiating backup power systems...",
    "Error: Cosmic ray interference. Shielding systems activated...",
    "Quantum tunneling protocols engaged. Quantum tunnel stable.",
    "Error: Data synchronization failure. Reestablishing data link...",
    "Analyzing hyperspace navigation routes...",
    "System reinitialization complete. Operating at optimal levels.",
    "Error: AI malfunction detected. Rebooting artificial intelligence...",
    "Error: Network congestion detected. Redistributing data traffic...",
    "Analyzing phase transition fluctuations...",
    "Data integrity verified. Proceeding with data transfer...",
    "Error: Time dilation anomaly detected. Compensating for temporal shift...",
    "System efficiency compromised. Implementing efficiency protocols...",
    "Error: System shutdown failure. Reinitiating shutdown procedure...",
    "Analyzing dark energy signatures...",
    "Error: Data compression error. Decompressing data...",
    "System restore in progress. Estimated time remaining: [time estimate].",
    "Error: Spatial-temporal anomaly detected. Stabilizing spacetime continuum...",
    "Quantum entanglement complete. Quantum entanglement stable.",
    "Error: Neural interface instability detected. Realigning neural interface...",
    "Analyzing cosmic inflation data...",
    "System integrity check in progress. Please standby...",
    "Error: Dimensional shift detected. Correcting dimensional alignment...",
    "Error: Holographic projection failure. Reinitializing holographic systems...",
    "Analyzing subspace distortion frequencies...",
    "Data encryption protocols engaged. Data encryption in progress...",
    "Error: Neural network synchronization failure. Reinitializing neural network...",
    "System diagnostics underway. Please wait for results...",
    "Error: Unknown quantum fluctuation detected. Stabilizing quantum field...",
    "Analyzing dark matter halos...",
    "Error: Data corruption detected. Attempting data recovery...",
    "System reboot sequence initiated. Standby for system restart...",
    "Error: Electromagnetic pulse detected. Shielding systems engaged...",
    "Quantum entanglement synchronization in progress...",
    "Error: System malfunction detected. Rebooting system...",
    "Analyzing intergalactic gravitational anomalies...",
    "Data transmission encryption initiated. Secure data transmission in progress...",
    "Error: Spatial distortion anomaly detected. Correcting spatial distortion...",
    "System performance optimized. Initiating task execution...",
    "Error: Time paradox detected. Resolving time paradox...",
    "Analyzing quantum field fluctuations...",
    "System synchronization error. Reinitializing synchronization process...",
    "Error: Quantum matrix instability detected. Realigning quantum matrix...",
    "Data stream interruption detected. Reestablishing data stream...",
    "Analyzing dark energy density fluctuations...",
    "Error: System gridlock detected. Resolving gridlock issue...",
    "Error: Neural synchronization failure. Reinitializing neural synchronization...",
    "System initialization in progress. Estimated time remaining: [time estimate].",
  ];

  let hints = [
    "Calculating optimal strategy...",
    "Analyzing data patterns...",
    "Searching for correlations...",
    "Evaluating probability distributions...",
    "Processing statistical data...",
    "Calculating algorithmic possibilities...",
    "Optimizing decision-making process...",
    "Reviewing historical data...",
    "Refining predictive models...",
    "Simulating scenario outcomes...",
    "Analyzing potential outcomes...",
    "Identifying logical patterns...",
    "Assessing strategic options...",
    "Predicting next steps...",
    "Exploring alternative approaches...",
  ];

  async function animateMessage(message, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.clear();
        console.log(neon(message));
        resolve();
      }, delay);
    });
  }

  async function startAnimation() {
    let delay = 0;
    for (let reaction of reactions) {
      await animateMessage(reaction, delay);
      delay += 1000;
    }
    console.log(neon("Reaction sequence complete."));
    delay = 0;
    for (let hint of hints) {
      await animateMessage(hint, delay);
      delay += 1000;
    }
    console.log(neon("Hint sequence complete."));
    console.log(neon("System initialization complete. Ready for operation."));
  }

  startAnimation();

  while (true) {
    const input = prompt(
      chalk.magentaBright("Enter your guess (or 'q' to quit): ")
    ).toLowerCase();

    if (input === "q") {
      console.log(chalk.red("Exiting protocol..."));
      break;
    }

    const guess = parseInt(input);

    if (isNaN(guess)) {
      console.log(
        chalk.red(
          "Invalid input detected. Protocol breach detected. Terminating unauthorized access attempt..."
        )
      );
      continue;
    }

    attempts++;

    if (Math.abs(guess - numberToGuess) > 15) {
      console.log(
        chalk.red(reactions[Math.floor(Math.random() * reactions.length)])
      );
    } else {
      const hint = hints[Math.floor(Math.random() * hints.length)];
      console.log(chalk.blue(hint));
      hints = hints.filter((h) => h !== hint);
    }

    if (guess === numberToGuess) {
      console.log(
        chalk.greenBright(
          `Access granted. Secure data acquired in ${attempts} attempts.`
        )
      );
      break;
    }
  }

  console.log(chalk.greenBright("Terminating connection..."));
  prompt(chalk.greenBright(""));
}

module.exports = { startNumberGuessingGame };
