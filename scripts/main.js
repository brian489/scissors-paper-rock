/** This is the made script file is run from when the player opens the page to when they leave */

let challengeButton, swapButton, optionArray;


challengeButton = document.getElementById("challenge");
swapButton = document.getElementById("swap");



function startGame() {
    clear();
    populateCardsInPlay();
    populatePlayerComputerCards();  
    intialisePlayers();
    updateLives();

    challengeButton.onclick = () => {

        if (challengeButton.classList.contains("selected")) {
            optionArray = verifyRound(true);
            const outcome = playRound(data.computer.computerCards[optionArray[1]], optionArray[0]); 
            updatePoints(outcome, optionArray);
        } 
        initialiseCardsForChallenge();
        setTimeout(deselectCards(), 2000) 
        challengeButton.classList.toggle("selected")
        
    }
    swapButton.onclick = () => {
        if (swapButton.classList.contains("selected")) {
            verifyRound(false);
        } 
        initialiseCardsForSwap();
        setTimeout(deselectCards(), 2000) 
        swapButton.classList.toggle("selected")
    }
}

startGame()





// const playerSelection = document.querySelector(".playerSelection");
// button.addEventListener("click", game)

// const computerSelection = document.querySelector(".computerSelection");
// button.addEventListener("click", game)
