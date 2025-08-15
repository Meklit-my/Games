console.log("Guess the number between 1 and 100");

const secret = Math.floor(Math.random() * 100) + 1;
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let attempts = 0;

function askGuess() {
  rl.question("Enter your guess: ", (answer) => {
    const guess = parseInt(answer);
    attempts++;

    if (isNaN(guess)) {
      console.log("That is not a valid number. Try again!");
      askGuess();
    } else if (guess < secret) {
      console.log("Too low!");
      askGuess();
    } else if (guess > secret) {
      console.log("Too high!");
      askGuess();
    } else {
      console.log(`🎉 Correct! The number was ${secret}.`);
      console.log(`You took ${attempts} attempt(s).`);
      rl.close();
    }
  });
}

askGuess();
