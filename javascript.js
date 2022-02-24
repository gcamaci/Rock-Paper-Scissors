let computerScore=0;
let playerScore=0;

//selecting userScore
const userScore = document.querySelector('#user');

//selecting enemy score 
const garyScore = document.querySelector('#enemy');

//selecting outcome 
const outcome = document.querySelector('#outcome')

let userChoice;
//selecting buttons and adding event listeners 
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    button.addEventListener('click', () => {
        userChoice = button.id;
        playGame();
        
        
        
    });
});

















function computerPlay(){
    choice = Math.floor(Math.random() * 3);
    if(choice===0){
        return 'grass';
    }else if(choice===1){
        return 'water';
    }else{
        return 'fire';
    }
};

function round(playerSelection){
    const computerSelection = computerPlay();
    if(playerSelection === computerSelection){
        outcome.textContent = 'Tie';

    }
    else if(playerSelection === 'grass'){
        if(computerSelection === 'water'){
            playerScore ++
            userScore.textContent = playerScore;
            outcome.textContent = 'Supper Effective! Grass beats Water'
            
        }else{
            computerScore++;
            garyScore.textContent = computerScore;
            outcome.textContent = 'You Lost! Fire beats Grass';
        }

    }
    else if(playerSelection === 'fire'){
        if(computerSelection=== 'grass'){
            playerScore++;
            userScore.textContent = playerScore;
            outcome.textContent = 'Super Effective! Fire beats Grass';
        }else{
            computerScore++;
            garyScore.textContent =computerScore;
            outcome.textContent = 'You Lost, Water beats Fire';
        }

    }
    else if(playerSelection === 'water'){
        if(computerSelection === 'fire'){
            playerScore++;
            userScore.textContent = playerScore;
            outcome.textContent = 'Super Effective! Water beats Fire';
        }else{
            computerScore++;
            garyScore.textContent = computerScore;
            outcome.textContent = "You Lost! Grass Beats water ";
        }
    }  
}

function playGame(){
    if (playerScore <= 4 && computerScore <= 4){
        round(userChoice);

    }else if(playerScore === 5){
        console.log("you win")

    }else if(computerScore){
        console.log('you lost')
    }
    else{
        return;
    }
};