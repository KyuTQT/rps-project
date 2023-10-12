//global variables
let playerScore = 0;
let computerScore = 0;
let gameCounter = 1;


//Variables from the DOM tree
let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorsBtn = document.querySelector('.scissors');

let playerScoretxt = document.querySelector('.playerScore');
let computerScoretxt = document.querySelector('.computerScore');
let roundNumber = document.querySelector('.round-status h1');
let playerStatus = document.querySelector('.round-status h2');

let playerImage = document.querySelector('#playerImage');
let computerImage = document.querySelector('#computerImage');

rockBtn.addEventListener('click', function(){
    playerImage.src = './img/rock.png';
    playRound('rock');
})

paperBtn.addEventListener('click', function(){
    playerImage.src = './img/paper.png';
    playRound('paper');
})

scissorsBtn.addEventListener('click', function(){
    playerImage.src = './img/scissors.png';
    playRound('scissors');
})


function playRound(playerSelection) {
    let didPlayerWin = 0;
    if (playerScore === 5 || computerScore === 5) {
        endGameResult(playerScore);
    }

    else {
        roundNumber.textContent = `Round# ${gameCounter}`;
        computerSelection = getComputerChoice();

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

        if (didPlayerWin === 0) { }
        else if (didPlayerWin === 1) {
            playerScore++;
        }
        else {
            computerScore++;
        }

        playerScoretxt.textContent = `Your Score: ${playerScore}`;
        computerScoretxt.textContent = `Computer Score: ${computerScore}`;
        gameCounter = ++gameCounter;
    }
}



function getComputerChoice() {
    let rpsChoice = Math.floor(Math.random() * 3) + 1;
    if (rpsChoice === 1) {
        computerImage.src = './img/rock.png';
        return 'rock';
    }
    else if (rpsChoice === 2) {
        computerImage.src = './img/paper.png';
        return 'paper';
    }
    else {
        computerImage.src = './img/scissors.png';
        return 'scissors';
    }

}

function endGameResult(playerScore){
    if(playerScore === 5){
        playerStatus.textContent = `You won!`;
    }
    else{
        playerStatus.textContent = `You Lose!`;
    }
}

function playerRockOptionResult(computerSelection){
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

function playerPaperResultOption(computerSelection){
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

function playerScissorsResultOption(computerSelection){
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

