//global variables
let playerScore = 0;
let computerScore = 0;
let gameCounter = 1;


//Variables from the DOM tree
let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorsBtn = document.querySelector('.scissors');
let playAgainBtn = document.querySelector('.retry');

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

playAgainBtn.addEventListener('click', function(){
    rockBtn.style.display = 'block';
    paperBtn.style.display = 'block';
    scissorsBtn.style.display = 'block';
    playAgainBtn.style.display = 'none';

    playerScore = 0;
    computerScore = 0;
    gameCounter = 1;
    roundNumber.textContent = `Round# ${gameCounter}`;
    playerScoretxt.textContent = `Your Score: ${playerScore}`;
    computerScoretxt.textContent = `Computer Score: ${computerScore}`;
    playerStatus.textContent = '';
    playerImage.style.backgroundColor = 'transparent';
    computerImage.style.backgroundColor = 'transparent';
    playerImage.src = './img/rps full.png';
    computerImage.src = './img/rps full.png';
})


function playRound(playerSelection) {
    let didPlayerWin = 0;
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

    endGameResult();

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

function endGameResult(){
    if(playerScore === 5 || computerScore === 5){
        rockBtn.style.display = 'none';
        paperBtn.style.display = 'none';
        scissorsBtn.style.display = 'none';
        playAgainBtn.style.display = 'block';

        if(playerScore > computerScore){
            playerStatus.textContent = `You Won!`;
            playerStatus.style.color = 'green';
        }
        else{
            playerStatus.textContent = `You Lose!`;
            playerStatus.style.color = 'red';
        }
        
    }
}

function playerWinsStyle(){
    playerImage.style.backgroundColor = "rgb(115, 184, 115)";
    computerImage.style.backgroundColor = "rgb(218, 101, 101)";
}

function playerLoseStyle(){
    playerImage.style.backgroundColor = "rgb(218, 101, 101)";
    computerImage.style.backgroundColor = "rgb(115, 184, 115)";
}

function playerDrawStyle(){
    playerImage.style.backgroundColor = 'transparent';
    computerImage.style.backgroundColor = 'transparent';
}

function playerRockOptionResult(computerSelection){
    switch (computerSelection) {
        case ('scissors'):
            playerWinsStyle();
            return 1;

        case ('paper'):
            playerLoseStyle();
            return 2;

        case ('rock'):
            playerDrawStyle();
            return 0;
    }
}

function playerPaperResultOption(computerSelection){
    switch (computerSelection) {
        case ('scissors'):
            playerLoseStyle();
            return 2;

        case ('paper'):
            playerDrawStyle();
            return 0;

        case ('rock'):
            playerWinsStyle();
            return 1;
    }
}

function playerScissorsResultOption(computerSelection){
    switch (computerSelection) {
        case ('scissors'):
            playerDrawStyle();
            return 0;


        case ('paper'):
            playerWinsStyle();
            return 1;


        case ('rock'):
            playerLoseStyle();
            return 2;
    }
}

