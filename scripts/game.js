/**
 * This file is meant to be used for functions required to run the game
 * eg. determining winner/loser or a round etc.
 */
// import { getData, setData, clear } from "./dataStore.js";

/**
 *  Determines the winner and loser 
 * @param {string} computer 
 * @param {string} player 
 * 
 * @returns {string} - The outcome of the round 
 */
function playRound(computer, player) {
    let outcome;
    if (computer == player) {
        outcome = "Draw"
    } else  if (computer == "Scissors") {
        (player == "Paper") ? outcome = "Lose" :  outcome = "Win"
    } else if (computer == "Paper") {
        (player == "Rock") ? outcome = "Lose" : outcome = "Win"
    } else if (computer == "Rock") {
        (player == "Paper") ? outcome = "Win" : outcome = "Lose"
    }
    removeCards(outcome);
    return outcome;
}

function createCard(isHuman, card) {
    let newCard = document.createElement('li');
    
    if (!isHuman) {
        newCard.classList.add(`unknown card`);
        computerCardList.appendChild(newCard);
        computerCards.push(card);
    } else {
        newCard.classList.add(`${card} card`);
        playerCardList.appendChild(newCard);
        playerCards.push(card);
    }
}


function getComputerChoice () {
    return computerCards[Math.floor(Math.random() * (computerLives))] 
}


function verifyRound(isChallenge) {
    const humanElement = document.getElementsByClassName("humanSelected")
    const compElements = document.getElementsByClassName("computerSelected") 
    if (isChallenge) {
        if (humanElement.length + compElements.length !== 2) prompt("Select only one of your cards and one of your opponent's cards to challenge")
        else {
            const humanString = humanElement[0].classList
            const humanChoice = data.choiceArray.find(word => humanString.contains(word));
            const computerIndex = Array.from(compElements[0].parentElement.children).indexOf(compElements[0]);
            return [humanChoice, computerIndex]
        }
    } else {
        if (humanElement < 1) prompt("Select at least one card to swap")
        else getNewCards(humanElement);
    }
    
}

function getNewCards(cardsForSwap) {
    if (cardsForSwap.length === 0) {
        //some sort of error
    } else {  
      
        let indexArray = [];
        for(const i of cardsForSwap) indexArray += Array.from(i.parentElement.children).indexOf(i);
        for (const j of indexArray) {
            const newCardIndex = Math.floor(Math.random() * data.deck.length)
            const temp = data.player.playerCards[j];
            data.player.playerCards[j] = data.deck[newCardIndex];
            data.deck[newCardIndex] = temp;
        }
        updateCards(indexArray)
    }
    

}
