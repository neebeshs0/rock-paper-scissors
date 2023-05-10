const moves = ["rock", "paper", "scissors"];

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = moves[randomNumber];
    console.log(computerChoice);
    return computerChoice; 
}

function playRound(userChoice, computerChoice) {
    if (userChoice == moves[0] && computerChoice == moves[1]) {
        return "computerWins";
    }
    if (userChoice == moves[0] && computerChoice == moves[2]) {
        return "userWins";
    }
    if (userChoice == moves[1] && computerChoice == moves[0]) {
        return "userWins";
    }
    if (userChoice == moves[1] && computerChoice == moves[2]) {
        return "computerWins";
    }
    if (userChoice == moves[2] && computerChoice == moves[0]) {
        return "computerWins";
    }
    if (userChoice == moves[2] && computerChoice == moves[1]) {
        return "userWins";
    }
    if (userChoice == computerChoice) {
        return "draw";
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Enter rock, paper or scissors:");
        let userChoice = userInput.toLocaleLowerCase();
        let computerChoice = getComputerChoice();
        let score = playRound(userChoice, computerChoice);
        if (score == "userWins") {
            userScore++;
        }
        if (score == "computerWins") {
            computerScore++;
        }
        if (score == "draw") {
            console.log("its a draw");
        }
        console.log("You: " + userScore + " | " + "Computer: " + computerScore);
    } 
}

game();