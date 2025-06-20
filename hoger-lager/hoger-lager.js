console.log('Main loaded');
 
const diceArray = ['&#9856;',
    '&#9857;',
    '&#9858;',
    '&#9859;',
    '&#9860;',
    '&#9861;'
];
// dit zijn alle dobelstenen in HTML symbolen
const victoryArray = ['Je hebt gewonnen!',
    'Computer: \"GG\"',
    'GEWONNEN!!',
    'GG!!',
    'Makkelijk'
];
const losArray = ['Je hebt verloren',
    'Dat is slecht',
    'Computer: \"Dit was te makelijk\"',
    'Jammer het kon beter',
    'je kan niet verliezen'
];
// dit zijn Arrays voor win en verlies
 
const playerCreditsText = document.querySelector('.player-credits');
const computerCreditsText = document.querySelector('.computer-credits');
const diceOneP = document.querySelector('.player-dice-one');
const diceTwoP = document.querySelector('.player-dice-two');
const diceThreeC = document.querySelector('.computer-dice-one');
const diceFourC = document.querySelector('.computer-dice-two');
const btnThrow = document.querySelector('.dice-button');
const btnHigher = document.querySelector('.higher-button');
const btnLower = document.querySelector('.lower-button');
const btnPlay = document.querySelector('.go-button');
const messageBox = document.querySelector('.message-box');
// alle variabelen wijst naar HTML classes
 
console.log(diceArray);
let nbrGenP1;
let nbrGenP2;
let nbrGenC1;
let nbrGenC2;
let gameOver = false;
let playerCredits = 10;
let computerCredits = 10;
btnThrow.disabled = true;
btnHigher.disabled = true;
btnLower.disabled = true;
btnPlay.disabled = false;
// dit zijn de start regels
 
 
btnThrow.addEventListener('click', throwFunction)
 
function throwFunction() {
    nbrGenC1 = Math.floor((Math.random() * 6));
    nbrGenC2 = Math.floor((Math.random() * 6));
    diceThreeC.innerHTML = diceArray[nbrGenC1]
    diceFourC.innerHTML = diceArray[nbrGenC2]
    btnThrow.disabled = true;
    btnHigher.disabled = false;
    btnLower.disabled = false;
    btnPlay.disabled = true;
}
// met deze function gooi je de dobbelsteen
 
btnPlay.addEventListener('click', startFunction)
 
function startFunction() {
 
    btnThrow.disabled = false;
    btnHigher.disabled = false;
    btnLower.disabled = false;
    btnPlay.disabled = true;
    playerCreditsText.innerHTML = playerCredits;
    computerCreditsText.innerHTML = computerCredits;
}
// dit is de functie hoe je de game start
 
btnHigher.addEventListener('click', higherBtn);
 
function higherBtn() {
    nbrGenP1 = Math.floor((Math.random() * 6));
    nbrGenP2 = Math.floor((Math.random() * 6));
    diceOneP.innerHTML = diceArray[nbrGenP1]
    diceTwoP.innerHTML = diceArray[nbrGenP2]
    btnThrow.disabled = false;
    btnHigher.disabled = true;
    btnLower.disabled = true;
    btnPlay.disabled = true;
    if (nbrGenP1 + nbrGenP2 > nbrGenC1 + nbrGenC2) {
        playerCredits++;
        computerCredits--;
        messageBox.innerHTML = victoryArray[Math.floor((Math.random() * victoryArray.length ))]
    }else if (nbrGenP1 + nbrGenP2 === nbrGenC1  + nbrGenC2){
        messageBox.innerHTML= 'Hoe gooi je het zelfde?'
    }else {
        playerCredits--;
        computerCredits++;
        messageBox.innerHTML = losArray[Math.floor((Math.random() * losArray.length ))]
    }
    playerCreditsText.innerHTML = playerCredits;
    computerCreditsText.innerHTML = computerCredits;
    if (playerCredits === 20)
    location.reload();
    if (computerCredits === 20)
    location.reload();
}
// dit is de code die ik heb gebruikt voor de higher button
 
btnLower.addEventListener('click', lowerBtn)
 
function lowerBtn() {
    nbrGenP1 = Math.floor((Math.random() * 6));
    nbrGenP2 = Math.floor((Math.random() * 6));
    diceOneP.innerHTML = diceArray[nbrGenP1]
    diceTwoP.innerHTML = diceArray[nbrGenP2]
    btnThrow.disabled = false;
    btnHigher.disabled = true;
    btnLower.disabled = true;
    btnPlay.disabled = true;
    if (nbrGenP1 + nbrGenP2 < nbrGenC1 + nbrGenC2) {
        playerCredits++;
        computerCredits--;
        messageBox.innerHTML = victoryArray[Math.floor((Math.random() * victoryArray.length ))]
    }else if (nbrGenP1 + nbrGenP2 === nbrGenC1  + nbrGenC2){
        messageBox.innerHTML= 'Hoe gooi je het zelfde?'
    }else {
        playerCredits--;
        computerCredits++;
        messageBox.innerHTML = losArray[Math.floor((Math.random() * losArray.length ))]
    }
    playerCreditsText.innerHTML = playerCredits;
    computerCreditsText.innerHTML = computerCredits;
    if (playerCredits === 20)
    location.reload();
    if (computerCredits === 20)
    location.reload();
}
// dit is de code die ik heb gebruikt voor de lower button