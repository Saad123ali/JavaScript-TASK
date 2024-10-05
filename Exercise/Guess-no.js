// Guess the Number Game

let num = Math.floor(Math.random() * 100) + 1;  // Generate a random number between 1 and 100
let chance = 0;
let guess;
let maxChances = 10;  // Maximum chances to guess the number

while (chance < maxChances) {
    guess = parseInt(prompt("\nGuess the number between 1 and 100\n"));  // Take input from the user
    chance++;  // Increment the number of chances

    if (guess === num) {
        alert("Congratulations! You guessed the correct number " + num + " in " + chance + " attempts!");
        break;  // End the game if the guess is correct
    } else if (guess < num) {
        alert("Too low! Try again.");
    } else if (guess > num) {
        alert("Too high! Try again.");
    }

    if (chance === maxChances) {
        alert("Game over! You've used all your chances. The correct number was " + num + ".");
    }
}
