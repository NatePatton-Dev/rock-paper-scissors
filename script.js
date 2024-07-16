function getComputerChoice() {
    let computerChoiceNumber = (Math.floor((Math.random()*3))+1);
    if (computerChoiceNumber === 1) {
        return "rock";
    } else if (computerChoiceNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    };
};
// return value equal to 'rock', 'paper', or 'scissors' randomly

function playRound (humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock") {
        if (computerChoice === "scissors") {
            ++humanScore;
            result.textContent = "Rock beats scissors - You win!";
        } else if (computerChoice === "paper") {
            ++computerScore;
            result.textContent = "Paper beats rock - You lose!";
        } else {
            result.textContent = "You both chose rock - Tie!";
        };
    } else if (humanChoice.toLowerCase() === "paper") {
        if (computerChoice === "rock") {
            ++humanScore;
            result.textContent = "Paper beats rock - You win!";
        } else if (computerChoice === "scissors") {
            ++computerScore;
            result.textContent = "Scissors beats paper - You lose!";
        } else {
            result.textContent = "You both chose paper - Tie!";
        };
    } else {
        if (computerChoice === "rock") {
            ++computerScore;
            result.textContent = "Rock beats scissors - You lose!";
        } else if (computerChoice === "paper") {
            ++humanScore;
            result.textContent = "Scissors beats paper - You win!";
        } else {
            result.textContent = "You both chose scissors - Tie!";
        };
    };
    if (humanScore === 5 || computerScore === 5) {
        rock.removeEventListener("click", chooseRock);
        paper.removeEventListener("click", choosePaper);
        scissors.removeEventListener("click", chooseScissors);
        if (humanScore > computerScore) {
            score.textContent = `You won! ${humanScore} to ${computerScore}`;
        } else {
            score.textContent = `You lost! ${humanScore} to ${computerScore}`;
        };
    } else {
        score.textContent = `You: ${humanScore} Computer: ${computerScore}`;
    };
};
// report results of round, report current score, 
// report winner if there is one, and deactivate buttons after 
// someone wins a game to 5

let humanScore = 0;
let computerScore = 0;
const score = document.querySelector("#score");
const result = document.querySelector("#result");
result.textContent = "Click one of the buttons above!";
score.textContent = `You: ${humanScore} Computer: ${computerScore}`;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
function chooseRock() {
    let humanSelection = "rock";
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
};
function choosePaper() {
    let humanSelection = "paper";
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
};
function chooseScissors() {
    let humanSelection = "scissors";
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
};
rock.addEventListener("click", chooseRock);
paper.addEventListener("click", choosePaper);
scissors.addEventListener("click", chooseScissors);
