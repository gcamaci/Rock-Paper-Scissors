//Global Scope
let computerScore = 0;
let playerScore = 0;

//Generate Random Number and assign it to Rock Paper or Scissors
function computerPlay(choice){
    choice = Math.floor(Math.random() * 3);
    if(choice===0){
        return 'rock';
    }else if(choice===1){
        return 'paper';
    }else{
        return 'scissors';
    }
}
//create a function for logic of rock paper scissors
/*one round, takes two parameters and compares to determine a winner. when winner is decided
computer or player score is incremented by 1 with ++. 
*/

function round(playerSelection,computerChoice){
    if(playerSelection === computerChoice){
        return 'Tie';

    }
    else if(playerSelection === 'rock'){
        if(computerChoice === 'scissors'){
            playerScore++
            return 'You Win! Rock beats Scissors' ;
            
        }else{
            computerScore++
            return 'You lost! Paper eats Rock';
        }

    }
    else if(playerSelection === 'paper'){
        if(computerChoice=== 'rock'){
            playerScore++
            return 'you win paper beats rock';
        }else{
            computerScore++
            return 'you lost scissors beat paper';
        }

    }
    else if(playerSelection === 'scissors'){
        if(computerChoice === 'paper'){
            playerScore++
            return 'You win scissors beats Paper'
        }else{
            computerScore++
            return "you lose Rock Bears Scissors "
        }
    }  
}
/*
starts the game 
*/
function playGame(){
    //creating playerSelection scope
    let playerSelection;
    // while  both counters are less than 5, prompt user for input and save as selection
    //log and invoke round function to determine winner
    while(computerScore < 5 && playerScore < 5){
        playerSelection = prompt("rock paper or scissors",playerSelection);
        console.log(round(playerSelection,computerPlay()));
        if(computerScore === 5){
            return `You lost to the Computer ${computerScore} to ${playerScore}`
        }
        else if(playerScore === 5){
            return `You beat the Computer ${playerScore} to ${computerScore}`

        }
        else{
            console.log(`Computer: ${computerScore} Your Score: ${playerScore}`)
        }
    }  
}



//---------Ideas for Change--------//
//make computer play function declaration a function Expression.
// see if you can then use it in the playGame function instead of actually calling function. 

