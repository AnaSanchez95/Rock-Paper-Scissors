let playerSelection;
let computerSelection;
let playerPoints = 0;
let computerPoints = 0;
let round = 1;

game();

function game() {       
    const btnRock = document.querySelector('#btnRock');
    const btnPaper = document.querySelector('#btnPaper');
    const btnScissors = document.querySelector('#btnScissors');
    const btnPlayAgain = document.querySelector('#play-again');
    
    btnRock.addEventListener('click', rockAtack);
    btnPaper.addEventListener('click', paperAtack);
    btnScissors.addEventListener('click', scissorsAtack);
    btnPlayAgain.addEventListener('click', playAgain);
    
    
    
    // console.log(`Your choice is: ${playerSelection}`);
    // console.log(`The computer choice is: ${computerSelection}`);
    
    // const resultado = gameRound(playerSelection, computerSelection);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice () {
    let randomAtack = random(1, 3);

    if (randomAtack === 1) {
        computerSelection = 'rock';
    }
    else if (randomAtack === 2) {
        computerSelection = 'paper';
    }
    else {
        computerSelection = 'scissors';
    }

    checkRound();
}

function rockAtack() {    
    playerSelection = 'rock';
    getComputerChoice();
}

function paperAtack() {    
    playerSelection = 'paper';
    getComputerChoice();
}

function scissorsAtack() {    
    playerSelection = 'scissors';
    getComputerChoice();
}

function gameRound() { 
    let result;
    round++;
    
    if (playerSelection === computerSelection) {
        result = 'Tie';
    }

    else if (playerSelection === "scissors") {

        if (computerSelection === "paper") {
            result = "You win! Scissors beats Paper!";
            playerPoints++;
        }
        else {
            result = "You lose! Rock beats Scissors";
            computerPoints++;
        }        
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "You win! paper beats rock!";
            playerPoints++;
        }
        else {
            result = "You lose! Scissors beats Paper";
            computerPoints++;
        }        
    }

    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            result = "You win! Rock beats Scissors!";
            playerPoints++;
        }
        else {
            result = "You lose! Paper beats Rock";
            computerPoints++;
        }        
    }

    showMessages(result);
    
}

function checkRound() {

    if (round <= 5) {
        gameRound();
    }
    else {
        disableButtons();
        checkWinner();        
    }
}

function disableButtons() {
    const btnRock = document.querySelector('#btnRock');
    const btnPaper = document.querySelector('#btnPaper');
    const btnScissors = document.querySelector('#btnScissors');

    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
}

function checkWinner() {
    let result;

    if (playerPoints > computerPoints) {
        result = 'You win!';
    }
    else if (playerPoints < computerPoints) {
        result = 'You lose! :(';
    }
    else {
        result = 'Tie, you almost got it!';
    }

    finalMessage(result);
}

function showMessages (result) {
    let sectionMessages = document.getElementById('messages');
    let paragraph = document.createElement('p');

    paragraph.innerText = result;

    sectionMessages.appendChild(paragraph);
}

function finalMessage (result) {
    let sectionFinalMessage = document.getElementById('final-message');
    let paragraph = document.createElement('p');

    paragraph.innerText = result;

    sectionFinalMessage.appendChild(paragraph);
}

function playAgain() {
    location.reload();
}
