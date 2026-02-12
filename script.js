
let humanScore = 0, computerScore = 0;

function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;

}

function getHumanChoice() {

    let playerChoice = prompt("enter rock, paper or scissors");
    return playerChoice;

}

function playRound(computerChoice, humanChoice) {
    
    humanChoice = humanChoice.toLowerCase();

    if (computerChoice === 0) 
        computerChoice = "scissors";
    else if (computerChoice === 1)
        computerChoice = "rock";
    else   
        computerChoice = "paper";

    if (humanChoice === computerChoice)
        console.log("its a draw");
    else if ((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper"))
    {
        console.log("You win!! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    else
        {
            console.log("You lose, " + computerChoice + " beats " + humanChoice)
            computerScore++;
        }

}

