/** functions Here are used and called upon when starting the game */

import { getData, setData, clear } from "./dataStore.js";

const populateCardsInPlay = () => {
    let data = getData();
    for (let i = 0; i < 10; i++) (data.cardsInPlay).push(data.choiceArray[ Math.floor(Math.random() * (3)) ]);
    data.deck = data.cardsInPlay.map((x) => x);
    setData(data);
    return;
}

const populatePlayerComputerCards = () => {
    let data = getData();
    for(let i = 0; i < 3; i++) { 
        data.player.playerCards.push(data.deck.splice(Math.floor(Math.random() * (data.deck.length)), 1)[0])
        data.computer.computerCards.push(data.deck.splice(Math.floor(Math.random() * (data.deck.length)), 1)[0])
    }
}

export{populateCardsInPlay, populatePlayerComputerCards};