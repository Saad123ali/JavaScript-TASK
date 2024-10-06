// use js to create a game of snake , water & gun. the game should ask you to enter S, W, or  G. the computer sholud be able to randomly generate S, W, or G and declare Win or Loss using alert , confirm and prompt wherever required  

// Snake, Water, Gun game using JavaScript

// Function to generate computer's choice
function getComputerChoice() {
    const choices = ["S", "W", "G"];  // Snake, Water, Gun
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Function to determine the winner
  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    }
    
    if ((playerChoice === "S" && computerChoice === "W") ||
        (playerChoice === "W" && computerChoice === "G") ||
        (playerChoice === "G" && computerChoice === "S")) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
  
  // Main game function
  function playGame() {
    const playerChoice = prompt("Enter S for Snake, W for Water, or G for Gun: ").toUpperCase();
    
    if (!["S", "W", "G"].includes(playerChoice)) {
      alert("Invalid choice! Please enter S, W, or G.");
      return;  // Exit if the input is invalid
    }
  
    const computerChoice = getComputerChoice();
    alert(`Computer chose: ${computerChoice}`);
  
    const result = determineWinner(playerChoice, computerChoice);
    alert(result);
  
    // Ask if the player wants to play again
    if (confirm("Do you want to play again?")) {
      playGame();  // Restart the game if the player confirms
    } else {
      alert("Thanks for playing!");
    }
  }
  
  // Start the game
  playGame();
  