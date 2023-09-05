const choiceArray = new Array("Scissors", "Paper", "Rock");

function fixString(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}
let hscore = 0;
let cscore = 0;

const textBit = document.querySelector("#start");
const yourScore = document.querySelector("#human-score");
const computerScore = document.querySelector("#computer-score");

function getComputerChoice (){
    return choiceArray[ Math.floor(Math.random() * (3)) ]
}

function display(a, b, c) {
    let message = "You " + c + "! "
    if (c == "Drew") {
        message += a + " draws with " + b
    } else if (c == "Win") {
        message += b + " beats " + a 
        hscore++;
    } else {
        message += a + " beats " + b
        cscore++;
    }
    textBit.textContent = message;
    yourScore.textContent = hscore;
    computerScore.textContent = cscore;
}

function game(computer, player) {
    player = fixString(player);
    if (!choiceArray.includes(player)) {
        textBit.textContent = "THATS NOT AN OPTION >:("
    }
    else {
            if (computer == player) {
            outcome = "Drew"
        } else  if (computer == "Scissors") {
            if (player == "Paper") {
                outcome = "Lose"
            } else {
                outcome = "Win"
            }
        } else if (computer == "Paper") {
            if (player == "Rock") {
                outcome = "Lose"
            } else {
                outcome = "Win"
            }
        } else if (computer == "Rock") {
            if (player == "Paper") {
                outcome = "Win"
            } else {
                outcome = "Lose"
            }
        }
        display(computer, player, outcome);
    }
}

function actual() {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt("What will you choose: Scissors, Paper or Rock?");
    game(computerChoice, playerChoice);
}
const button = document.querySelector("#Button-1");
button.addEventListener("click", actual)