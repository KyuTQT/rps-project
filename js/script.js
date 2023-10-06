function getComputerChoice () {
    let rpsChoice = Math.floor(Math.random() * 3) + 1; 
    console.log(rpsChoice);

    if(rpsChoice === 1){
        return 'rock';
    }
    else if (rpsChoice === 2){
        return 'paper';
    }
    else{
        return 'scissors';
    }

}

function getPlayerChoice(){
    let playerChoice;
    while (true){
        playerChoice = prompt(`Please select one of the following: 'rock', 'paper', or 'scissors'?`, ' ');
        playerChoice = playerChoice.toLowerCase();

        if (playerChoice === 'rock' || playerChoice === 'paper'|| playerChoice === 'scissors'){
            return playerChoice;
        }
    }
}

function playRound(playerSelection, computerSelection){
    let playerScore = 0;
    let computerScore = 0;

    //rock three conditions (win, lose, and draw)
    switch(playerSelection){
        case('rock'):
        switch(computerSelection){
            case('scissors'):
            console.log('You chose: ' + playerSelection);
            console.log('The computer chose: ' + computerSelection);
            playerScore++;
            console.log('You win!');
            console.log('Current Scores:\n Player: ' + playerScore + '\nComputer: ' + computerScore);
            break;

            case('paper'):
            console.log('You chose: ' + playerSelection);
            console.log('The computer chose: ' + computerSelection);
            computerScore++;
            console.log('You lose!');
            console.log('Current Scores:\n Player: ' + playerScore + '\nComputer: ' + computerScore);
            break;

            case('rock'):
            console.log('You chose: ' + playerSelection);
            console.log('The computer chose: ' + computerSelection);
            console.log(`It's a draw!`);
            console.log('Current Scores:\n Player: ' + playerScore + '\nComputer: ' + computerScore);
            break;
        }
        break;

        //paper three conditions (win, lose, and draw)
        case('paper'):
        switch(computerSelection){
            case('scissors'):
            console.log('You chose: ' + playerSelection);
            console.log('The computer chose: ' + computerSelection);
            computerScore++;
            console.log('You lose!');
            console.log('Current Scores:\n Player: ' + playerScore + '\nComputer: ' + computerScore);
            break;

            case('paper'):
            console.log('You chose: ' + playerSelection);
            console.log('The computer chose: ' + computerSelection);
            console.log(`It's a draw!`);
            console.log('Current Scores:\n Player: ' + playerScore + '\nComputer: ' + computerScore);
            break;

            case('rock'):
            console.log('You chose: ' + playerSelection);
            console.log('The computer chose: ' + computerSelection);
            playerScore++;
            console.log('You win!');
            console.log('Current Scores:\n Player: ' + playerScore + '\nComputer: ' + computerScore);
            break;
        }
        break;

        //scissors three conditions (win, lose, and draw)
        case('scissors'):
        switch(computerSelection){
            case('scissors'):
            console.log('You chose: ' + playerSelection);
            console.log('The computer chose: ' + computerSelection);
            console.log(`It's a draw!`);
            console.log('Current Scores:\n Player: ' + playerScore + '\nComputer: ' + computerScore);
            break;

            case('paper'):
            console.log('You chose: ' + playerSelection);
            console.log('The computer chose: ' + computerSelection);
            playerScore++;
            console.log('You win!');
            console.log('Current Scores:\n Player: ' + playerScore + '\nComputer: ' + computerScore);
            break;

            case('rock'):
            console.log('You chose: ' + playerSelection);
            console.log('The computer chose: ' + computerSelection);
            computerScore++;
            console.log('You lose!');
            console.log('Current Scores:\n Player: ' + playerScore + '\nComputer: ' + computerScore);
            break;
        }
        break;
    }

}

playRound(getPlayerChoice(), getComputerChoice());