/**
 * This file is meant to be used for functions required to run the game
 * eg. determining winner/loser or a round etc.
 */
import { getData, setData, clear } from "./dataStore.js";

/**
 *  Determines the winner and loser 
 * @param {string} computer 
 * @param {string} player 
 * 
 * @returns {string} - The outcome of the round 
 */
export function playRound(computer, player) {
    
    if (computer == player) {
        outcome = "Draw"
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

function updateScore(a, b, c) {
    let message = "You " + c + "! "
    if (c == "Drew") {
        message += a + " draws with " + b
    } else if (c == "Win") {
        message += b + " beats " + a 
        computerLives--;
    } else {
        message += a + " beats " + b
        humanLives--;
    }
    textBit.textContent = message;
    yourScore.textContent = hscore;
    computerScore.textContent = cscore;
}

function getComputerChoice () {
    return computerCards[Math.floor(Math.random() * (computerLives))] 
}
