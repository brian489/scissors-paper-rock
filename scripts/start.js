/** functions Here are used and called upon when starting the game */

// import { getData, setData, clear } from "./dataStore.js";

const scissorsCountText = document.querySelector("#scissors-count");
const paperCountText = document.querySelector("#paper-count");
const rockCountText = document.querySelector("#rock-count");

let scissorsCount = 0;
let paperCount = 0;
let rockCount = 0;

const populateCardsInPlay = () => {
    let data = getData();
    for (let i = 0; i < 10; i++) {
        const option = data.choiceArray[ Math.floor(Math.random() * (3)) ];
        if (option === "Rock") rockCount++;
        else if (option === "Paper") paperCount++;
        else scissorsCount++;
        (data.cardsInPlay).push(option);
    }
    scissorsCountText.textContent = scissorsCount;
    paperCountText.textContent = paperCount;
    rockCountText.textContent = rockCount;
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
