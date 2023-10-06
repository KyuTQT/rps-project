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

        if (playerChoice === 'rock'){
            return playerChoice;
        }
        else if (playerChoice === 'paper'){
            return playerChoice;
        }
        else if (playerChoice === 'scissors'){
            return playerChoice;
        }
    }
}
console.log(getPlayerChoice());