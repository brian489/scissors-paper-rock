/**
 * This file is meant to be where all the data for :
 *      - Cards
 *      - Score
 *      - Lives
 *      - etc. 
 * is stored and changed
 */


const START_LIVES = 3;

let data = {
    //player data
    player: {
        playerCards: [],
        playerLives: START_LIVES,
        score: 0,
    },
    //computer data
    computer: {
        computerCards: [],
        computerLives: START_LIVES,
        score: 0,
    },
    // Cards that are in the deck and hands
    cardsInPlay: [],
    // Cards in the deck
    deck: [],
    choiceArray: ["Scissors", "Paper", "Rock"]
}

let humanScore = 0;
let computerScore = 0;


const getData = () => data;
const setData = (newData) => data = newData;
function clear() {
    setData({
        player: {
            playerCards: [],
            playerLives: START_LIVES,
            score: 0,
        },
        computer: {
            computerCards: [],
            computerLives: START_LIVES,
            score: 0,
        },
        cardsInPlay: [],
        deck: [],
        choiceArray: ["Scissors", "Paper", "Rock"]
    });
}

export {getData, setData, clear}