console.log("Hello World!");

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

let testing = getComputerChoice();
console.log(testing);