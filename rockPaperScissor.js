let options = ["Rock", "Paper", "Scissors"];
function computerPlay() {
    let randomWord = options[Math.floor(Math.random() * options.length)];

    return randomWord;
}
function playersChoice() {
    let playerChoice = prompt("Enter your choice player");

    while (true) {
        if (playerChoice.toLowerCase() == "rock" || playerChoice.toLowerCase() == "paper" || playerChoice.toLowerCase() == "scissors") {
            break;
        }
        else { playerChoice = prompt("Enter your choice, your previous choice not valid"); }


    }

    return playerChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound() {

    let result = "";
    let playerchoice = playersChoice().toLowerCase();
    let computerchoice = computerPlay().toLowerCase();

    if (playerchoice === computerchoice) {
        result = "No one Wins. It is a draw"
    }
    else if ((playerchoice == "scissors" && computerchoice == "paper") || (playerchoice == "paper" && computerchoice == "rock") ||
        (playerchoice == "rock" && computerchoice == "scissors")) {
        result = "You Win!!! " + playerchoice + " beats " + computerchoice;
        playerScore++;
    }
    else {
        result = " You Lose!" + computerchoice + " beats " + playerchoice;
        computerScore++;
    }
    return result;

}


function game() {

    let finalresult = "";
    for (i = 0; i < 5; i++) {
        playRound();

    }

    if (playerScore > computerScore) {
        finalresult = "You won!!";
    }
    else if (playerScore < computerScore) {
        finalresult = "You lose!!";
    }
    else {
        finalresult = "Draw";
    }

    return finalresult;
}

console.log(game());