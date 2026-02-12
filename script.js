function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;

}

function getHumanChoice() {

    let playerChoice = prompt("enter rock, paper or scissors");
    return playerChoice;

}

