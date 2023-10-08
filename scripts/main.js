/** This is the made script file is run from when the player opens the page to when they leave */

import { getData, setData, clear } from "./dataStore.js";
import { populateCardsInPlay, populatePlayerComputerCards } from "./start.js";


// const challengeButton = document.querySelector("#challenge");
// const swapButton = document.querySelector("#swap");
let currentChallenge = 0;

function startGame() {
    clear();
    populateCardsInPlay();
    populatePlayerComputerCards();  
    intialisePlayers();
}

startGame();

// challenge.addEventListener("click", challenge())


// swap.addEventListener("click", swap())






// const playerSelection = document.querySelector(".playerSelection");
// button.addEventListener("click", game)

// const computerSelection = document.querySelector(".computerSelection");
// button.addEventListener("click", game)
