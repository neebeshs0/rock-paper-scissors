let userInput = prompt("Enter rock, paper or scissors:");
let playerSelection = userInput.toLocaleLowerCase();

function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * (4 - 1) ) + 1;
    console.log(randomInt);
    switch (randomInt) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    computerWin = "Computer Wins";
    playerWin = "You Win";
    draw = "It's a draw"
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        return computerWin;
    }
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        return playerWin;
    }
    if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors") {
        return draw;
    } 
}

function game(playerSelection, computerSelection) {
    computerScore = 0;
    playerScore = 0;
    for (let i = 0; i < 5; i++) {
        x = playRound(playerSelection, computerSelection);
        if (x == "Computer Wins") {
            console.log("Computer wins the round!");
            computerScore++;
        }
        if (x == "You Win") {
            console.log("You win the round!");
            playerScore++;
        }
        if (x == "It's a draw") {
            console.log("It's a draw.");
            playerScore++;
            computerScore++;
        }
    }
}

game(playerSelection, getComputerChoice());