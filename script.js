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
        alert("Incorrect value entered, please only type rock, paper, or scissors")
        return getHumanChoice()
    }
}
// return 'rock, 'paper', or 'scissors' depending on user input