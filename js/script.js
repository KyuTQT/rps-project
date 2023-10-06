function getComputerChoice() {
    let rpsChoice = Math.floor(Math.random() * 3) + 1;

    if (rpsChoice === 1) {
        return 'rock';
    }
    else if (rpsChoice === 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }

}

function getPlayerChoice() {
    let playerChoice;
    while (true) {
        playerChoice = prompt(`Please select one of the following: 'rock', 'paper', or 'scissors'?`, ' ');
        playerChoice = playerChoice.toLowerCase();

        if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
            return playerChoice;
        }
    }
}

function endGameResult(playerScore, computerScore, gameCounter){
    console.log('==========================================================================');
    if(playerScore === 3){
        console.log('Congragulations, you won!!!');
    }
    else{
        console.log('Awww... better luck next time!');
    }
    console.log('Total number of games: ' + --gameCounter);
    console.log('Final Scores:\n  Player: ' + playerScore + '\n  Computer: ' + computerScore);
}

function gameCounterIncrementor(gameCounter){
    if(gameCounter > 1){//avoid being re-prompted when first entering the loop
        console.log('==========================================================================');
        return ++gameCounter;
    }
    else{
        return ++gameCounter;
    }
}

function playerRockOptionResult(computerSelection){//possible results for the player picking rock
    switch (computerSelection) {
        case ('scissors'):
            console.log('You win!');
            return 1;

        case ('paper'):
            console.log('You lose!');
            return 2;

        case ('rock'):
            console.log(`It's a draw!`);
            return 0;
    }
}

function playerPaperResultOption(computerSelection){//possible results for the player picking paper
    switch (computerSelection) {
        case ('scissors'):
            console.log('You lose!');
            return 2;

        case ('paper'):
            console.log(`It's a draw!`);
            return 0;

        case ('rock'):
            console.log('You win!');
            return 1;
    }
}

function playerScissorsResultOption(computerSelection){//possible results for the player picking scissors
    switch (computerSelection) {
        case ('scissors'):
            console.log(`It's a draw!`);
            return 0;


        case ('paper'):
            console.log('You win!');
            return 1;


        case ('rock'):
            console.log('You lose!');
            return 2;
    }
}

function playRound(playerSelection = ' ', computerSelection = ' ') {
    console.log('==========================================================================');
    console.log("Play rock paper scissors against the totally fair computer!\nFirst to three wins!");
    let playerScore = 0;
    let computerScore = 0;
    let gameCounter = 1;
    let didPlayerWin = 0;

    while (true) {
        if (playerScore === 3 || computerScore === 3) {
            endGameResult(playerScore, computerScore, gameCounter);
            break;
        }

        else {
            console.log('Game Number: ' + gameCounter);
            computerSelection = getComputerChoice();
            playerSelection = getPlayerChoice();
            
            
            switch (playerSelection) {
                case ('rock'):
                    didPlayerWin = playerRockOptionResult(computerSelection);
                break;

                case ('paper'):
                    didPlayerWin = playerPaperResultOption(computerSelection);
                break;

                case ('scissors'):
                    didPlayerWin = playerScissorsResultOption(computerSelection);
                break;
            }

            if(didPlayerWin === 0){}
            else if(didPlayerWin === 1){
                playerScore++;
            }
            else{
                computerScore++;
            }

            console.log('You chose: ' + playerSelection);
            console.log('The computer chose: ' + computerSelection);
            console.log('Current Scores:\n  Player: ' + playerScore + '\n  Computer: ' + computerScore);
            gameCounter = gameCounterIncrementor(gameCounter);
        }
    }
}

playRound();

while (confirm('Play again?') === true){
    playRound();
}

console.log("Thank you for playing and enjoy your day!");