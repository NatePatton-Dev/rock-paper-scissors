function getComputerChoice() {
    let computerChoiceNumber = (Math.floor((Math.random()*3))+1)
    if (computerChoiceNumber === 1) {
        return "rock"
    } else if (computerChoiceNumber === 2) {
        return "paper"
    } else {
        return "scissors"
    } 
}
// return value equal to 'rock', 'paper', or 'scissors' randomly

function getHumanChoice() {
    let humanChoice = prompt("Type rock, paper, or scissors")
    if (humanChoice === ("rock" || "paper" || "scissors")) {
        return humanChoice
    } else {
        alert("Incorrect value entered, please only type rock, paper, or scissors. This is case sensitive")
        return getHumanChoice()
    }
}
// return 'rock, 'paper', or 'scissors' depending on user input

let humanScore = 0
let computerScore = 0

function playRound (humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock") {
        if (computerChoice === "scissors") {
            ++humanScore
            console.log("Rock beats scissors - You win!")
        } else if (computerChoice === "paper") {
            ++computerScore
            console.log("Paper beats rock - You lose!")
        } else {
            console.log("You both chose rock - Tie!")
        }
    } else if (humanChoice.toLowerCase() === "paper") {
        if (computerChoice === "rock") {
            ++humanScore
            console.log("Paper beats rock - You win!")
        } else if (computerChoice === "scissors") {
            ++computerScore
            console.log("Scissors beats paper - You lose!")
        } else {
            console.log("You both chose paper - Tie!")
        }
    } else {
        if (computerChoice === "rock") {
            ++computerScore
            console.log("Rock beats scissors - You lose!")
        } else if (computerChoice === "paper") {
            ++humanScore
            console.log("Scissors beats paper - You win!")
        } else {
            console.log("You both chose scissors - Tie!")
        }
    }
}
/* play a round of Rock Paper Scissors using the two get functions and incrementing the appropriate score and console.log appropriate response.
I know the toLowerCase() is not necessary given the value of getHumanChoice can only be lowercase, but I wanted to show understanding of how to make
a function parameter case insensitive, while still ensuring only valid choices come out of getHumanChoice() */

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)
