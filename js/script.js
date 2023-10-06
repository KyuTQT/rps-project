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

function playRound(playerSelection, computerSelection) {
    console.log('==========================================================================');
    console.log("Play rock paper scissors against the totally fair computer!\n First to three wins!");
    let playerScore = 0;
    let computerScore = 0;
    let gameCounter = 1;

    while (true) {
        if (playerScore === 3) {
            console.log('==========================================================================');
            console.log('Congragulations, you won!!!');
            console.log('Total number of games: ' + --gameCounter);
            console.log('Final Scores:\n  Player: ' + playerScore + '\n  Computer: ' + computerScore);
            break;
        }

        else if (computerScore === 3) {
            console.log('==========================================================================');
            console.log('Awww... better luck next time!');
            console.log('Total number of games: ' + --gameCounter);
            console.log('Final Scores:\n  Player: ' + playerScore + '\n  Computer: ' + computerScore);
            break;
        }

        else {//avoid being re-prompted when first entering the loop
            if(gameCounter > 1){
                computerSelection = getComputerChoice();
                playerSelection = getPlayerChoice();
                console.log('==========================================================================');
                console.log('Round Number: ' + gameCounter);
            }
            
            //rock three conditions (win, lose, and draw)
            switch (playerSelection) {
                case ('rock'):
                    switch (computerSelection) {
                        case ('scissors'):
                            console.log('You chose: ' + playerSelection);
                            console.log('The computer chose: ' + computerSelection);
                            playerScore++;
                            console.log('You win!');
                            console.log('Current Scores:\n  Player: ' + playerScore + '\n  Computer: ' + computerScore);
                            break;

                        case ('paper'):
                            console.log('You chose: ' + playerSelection);
                            console.log('The computer chose: ' + computerSelection);
                            computerScore++;
                            console.log('You lose!');
                            console.log('Current Scores:\n  Player: ' + playerScore + '\n  Computer: ' + computerScore);
                            break;

                        case ('rock'):
                            console.log('You chose: ' + playerSelection);
                            console.log('The computer chose: ' + computerSelection);
                            console.log(`It's a draw!`);
                            console.log('Current Scores:\n  Player: ' + playerScore + '\n  Computer: ' + computerScore);
                            break;
                    }
                break;

                //paper three conditions (win, lose, and draw)
                case ('paper'):
                    switch (computerSelection) {
                        case ('scissors'):
                            console.log('You chose: ' + playerSelection);
                            console.log('The computer chose: ' + computerSelection);
                            computerScore++;
                            console.log('You lose!');
                            console.log('Current Scores:\n  Player: ' + playerScore + '\n  Computer: ' + computerScore);
                            break;

                        case ('paper'):
                            console.log('You chose: ' + playerSelection);
                            console.log('The computer chose: ' + computerSelection);
                            console.log(`It's a draw!`);
                            console.log('Current Scores:\n  Player: ' + playerScore + '\n  Computer: ' + computerScore);
                            break;

                        case ('rock'):
                            console.log('You chose: ' + playerSelection);
                            console.log('The computer chose: ' + computerSelection);
                            playerScore++;
                            console.log('You win!');
                            console.log('Current Scores:\n  Player: ' + playerScore + '\n  Computer: ' + computerScore);
                            break;
                    }
                break;

                //scissors three conditions (win, lose, and draw)
                case ('scissors'):
                    switch (computerSelection) {
                        case ('scissors'):
                            console.log('You chose: ' + playerSelection);
                            console.log('The computer chose: ' + computerSelection);
                            console.log(`It's a draw!`);
                            console.log('Current Scores:\n  Player: ' + playerScore + '\n  Computer: ' + computerScore);
                            break;

                        case ('paper'):
                            console.log('You chose: ' + playerSelection);
                            console.log('The computer chose: ' + computerSelection);
                            playerScore++;
                            console.log('You win!');
                            console.log('Current Scores:\n  Player: ' + playerScore + '\n  Computer: ' + computerScore);
                            break;

                        case ('rock'):
                            console.log('You chose: ' + playerSelection);
                            console.log('The computer chose: ' + computerSelection);
                            computerScore++;
                            console.log('You lose!');
                            console.log('Current Scores:\n  Player: ' + playerScore + '\n  Computer: ' + computerScore);
                            break;
                    }
                break;

            }
            gameCounter++;
        }
    }
}

playRound(getPlayerChoice(), getComputerChoice());

while (confirm('Play again?') === true){
    playRound(getPlayerChoice(), getComputerChoice());
}

console.log("Thank you for playing and enjoy your day!");