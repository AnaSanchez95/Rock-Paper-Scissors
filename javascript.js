function getComputerChoice () {
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    let x = Math.round(Math.random()*10);
    let choice;

    switch (x) {
        case 0: 
        case 1:
        case 2:
            choice = rock;
            break;
        case 3:
        case 4:
        case 5:
        case 6:
            choice = paper;
            break;
        default:
            choice = scissors;            
    }

    return choice
}

function game () {      

    function gameRound (playerSelection, computerSelection) {
        let result;

        if (playerSelection === "scissors") {

            if (computerSelection === "scissors") {
                result = "Tie";
            }
            else if (computerSelection === "paper") {
                result = "You win! Scissors beats Paper!";
            }
            else if (computerSelection === "rock") {
                result = "You lose! Rock beats Scissors";
            }
            
        }

        if (playerSelection === "paper") {

            if (computerSelection === "paper") {
                result = "Tie";
            }
            else if (computerSelection === "rock") {
                result = "You win! paper beats rock!";
            }
            if (computerSelection === "scissors") {
                result = "You lose! Scissors beats Paper";
            }
            
        }

        if (playerSelection === "rock") {

            if (computerSelection === "rock") {
                result = "Tie";
            }
            else if (computerSelection === "scissors") {
                result = "You win! Rock beats Scissors!";
            }
            else if (computerSelection === "paper") {
                result = "You lose! Paper beats Rock";
            }
            
        }

        return result;
    }
    
    console.log("The game start here:")
    let playerCounter = 0;  
    let computerCounter = 0;
    
    for (let i = 0; i < 5; i++) {
        playerSelection = (prompt("Enter your choice [paper, rock, scissors]")).toLowerCase();
        let computerSelection = getComputerChoice();

        console.log(`Your choice is: ${playerSelection}`);
        console.log(`The computer choice is: ${computerSelection}`);
        
        let resultado = gameRound(playerSelection, computerSelection);
        console.log(resultado);


        if (resultado.includes("lose")){
            computerCounter++;
        }
        else if (resultado.includes("win")){
            playerCounter++;
        }
        else if (resultado.includes("Tie")){
            playerCounter++;
            computerCounter++;
        }

    }

    if (playerCounter > computerCounter) {
        console.log(`You have win ${playerCounter}-${computerCounter}. Congratulations!`)
    }
    else if (playerCounter < computerCounter) {
        console.log(`You have lose ${playerCounter}-${computerCounter}. Better luck next time!`)
    }
    else {
        console.log(`You have tie ${playerCounter}-${computerCounter}. You almost had it!`)
    }
                 
}


game();

