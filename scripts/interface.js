/** functions here will directly interact with the html */
// import { getData, setData, clear } from "./dataStore.js";

const playerCardList = document.querySelector("#human-cards");
const computerCardList = document.querySelector("#computer-cards");

function initialiseCardsForChallenge() {
    let cards = document.getElementsByClassName('card');
    for (const i of cards) {
        i.classList.toggle('selectable');
        i.onclick = () => { 
            if(i.className.includes("human")){
                i.classList.toggle('humanSelected')
            } else {
                i.classList.toggle('computerSelected')
            }   
        }
    }
}
function initialiseCardsForSwap() {
    let cards = document.getElementsByClassName('card');
    for (const i of cards) {
        if (i.className.includes("human")) {
            i.classList.toggle('selectable');
            i.onclick = () =>  i.classList.toggle('humanSelected')        
        }
    }
}

function createCard(isHuman, card) {
    let newCard = document.createElement('li');
    if (!isHuman) {
        newCard.classList.add(`unknown`);
        computerCardList.appendChild(newCard);
    } else {
        newCard.classList.add(`${card}`, 'human');
        playerCardList.appendChild(newCard);
    }
    newCard.classList.add('card');
    return;
}

function intialisePlayers() {
    let playerCards = getData().player.playerCards;
    let computerCards = getData().computer.computerCards;
    for (let i = 0; i < playerCards.length; i++) {
        createCard(true, playerCards[i]);
        createCard(false, computerCards[i]);
    }    
}

function deselectCards() {
    const arrayOne = ["humanSelected", "computerSelected"]
    for(const i of arrayOne) {
        const array = Array.from(document.getElementsByClassName(i))
        // console.log(array)
        for (let n = 0; n < array.length; n++){
            console.log(array[n], n)
            array[n].classList.toggle(i);
        }
    }
}

function updatePoints(outcome, ...options) {
    let gameContinue = true;
    let message = "You " + outcome + "! "
    if (outcome == "Draw") {
        message += options[0] + " draws with " + options[1]
    } else if (outcome == "Win") {
        message += options[1] + " beats " + options[0]
        data.computer.computerLives--;
    } else {
        message += options[1] + " loses to " + options[0]
        data.player.playerLives--;
    }
    if (data.player.playerLives === 0){
        message += ". Which means you lose :["
        gameContinue = false;
    } else if (data.computer.computerLives === 0) {
        message += ". Which means you WIN :]"
        gameContinue = false;
    }
    updateLives();
    window.alert(message)
   
    return gameContinue;
}

function updateLives() {
    // console.log(data.player.playerLives)
    let hLife = "";
    for (let i = 0; i < data.player.playerLives; i++ ){
        hLife += "❤ "
    }
    document.querySelector("#lives").textContent = hLife;
}

function updateCards(indexArray) {
    const oldCards = document.getElementsByClassName("humanSelected")
    for (let i = 0; i < oldCards.length; i++) {
        const oldClass = data.choiceArray.find(word => oldCards[i].classList.contains(word));
        oldCards[i].classList.replace(oldClass, data.player.playerCards[indexArray[i]]);
    }
}
 
function removeCards(outcome) {
    if(outcome === "Win") {
        data.computer.computerCards.splice(Array.from(document.querySelector(".computerSelected")), 1)
        document.querySelector(".computerSelected").remove()

    } else if (outcome === "Lose") {
        data.player.playerCards.splice(Array.from(document.querySelector(".humanSelected")), 1)
        document.querySelector(".humanSelected").remove()
    } 
}