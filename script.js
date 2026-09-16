let humanScore = 0, computerScore = 0;

function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) 
        computerChoice = "scissors";
    else if (computerChoice === 1)
        computerChoice = "rock";
    else   
        computerChoice = "paper";

    return computerChoice;

}

function getHumanChoice() {

    let rock = document.querySelector("#rock");
    let paper = document.querySelector("#paper");
    let scissors = document.querySelector("#scissors");
    
    rock.addEventListener("click", function () {
        playRound("rock");
    });
    
    paper.addEventListener("click", function() {
        playRound("paper");
    });
    
    scissors.addEventListener("click", function() {
        playRound("scissors");
    });

}

function playRound(humanChoice) {
    
    let computerChoice = getComputerChoice();

    const result = document.createElement("div");
    const body = document.querySelector("body");
    body.appendChild(result);


    if (humanChoice === computerChoice)
            result.textContent += "\nit's a draw";
    else if ((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper")) {
        result.textContent += "\nYou win!! " + humanChoice + " beats " + computerChoice;
        humanScore++;
        }
    else {
        result.textContent += "\nYou lose, " + computerChoice + " beats " + humanChoice;
        computerScore++;
        }
    result.textContent += "\nHuman score =" + humanScore;
    result.textContent += "\nComputer score =" + computerScore;
    

    const over = document.createElement("div");
    body.appendChild(over);

    if(computerScore == 5) {
        result.textContent = "GAME OVER!! Computer wins";
        humanScore = 0, computerScore = 0;
    }

    if(humanScore == 5) {
        result.textContent = "GAME OVER!! Human wins";
        humanScore = 0, computerScore = 0;
    }
}

getHumanChoice();
