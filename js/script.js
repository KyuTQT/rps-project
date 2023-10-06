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
    console.log (computerSelection);
    //rock three conditions (win, lose, and draw)
    switch(playerSelection){
        case('rock'):
        switch(computerSelection){
            case('scissors'):
            console.log('You win!');
            break;

            case('paper'):
            console.log('You lose!');
            break;

            case('rock'):
            console.log(`It's a draw!`);
        }
    }

}

playRound(getPlayerChoice(), getComputerChoice());