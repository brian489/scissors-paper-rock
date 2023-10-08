/** functions here will directly interact with the html */
import { getData, setData, clear } from "./dataStore.js";

const playerCardList = document.querySelector("#human-cards");
const computerCardList = document.querySelector("#computer-cards");

function createCard(isHuman, card) {
    let newCard = document.createElement('li');
    
    if (!isHuman) {
        newCard.classList.add(`unknown card`);
        computerCardList.appendChild(newCard);
    } else {
        newCard.classList.add(`${card} card`);
        playerCardList.appendChild(newCard);
    }
}


function intialisePlayers() {
    playerCards = getData().player.playerCards;
    computerCards = getData().computer.computerCards;
    for (const i = 0; i < playerCards.length; i++) {
        createCard(true, playerCards[i]);
        createCard(false, computerCards[i]);
    }    
}
