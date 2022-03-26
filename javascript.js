let computerScore=0;
let playerScore=0;


const userImage = document.querySelector('.image1')
const compImage = document.querySelector('.image2')
//selecting userScore
const userScore = document.querySelector('.user-score');

//selecting enemy score 
const opScore = document.querySelector('.computer-score');

//selecting outcome 
const outcome = document.querySelector('#outcome')

let userChoice;
//selecting buttons and adding event listeners 
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {

    button.addEventListener('click', () => {
        userChoice = button.id;
        userImage.innerHTML = " ";
        compImage.innerHTML = " "
        playGame(); 
    });
});

function computerPlay(){
    choice = Math.floor(Math.random() * 3);
    if(choice===0){
        return 'rock';
    }else if(choice===1){
        return 'paper';
    }else{
        return 'scissors';
    }
};

function round(playerSelection){
    const computerSelection = computerPlay(); 

    if(playerSelection === computerSelection){
        outcome.textContent = 'Tie';

        const img1 = document.createElement('img');
        img1.src = `images/${playerSelection}.png`;
        img1.classList.add('playerImage');
        userImage.appendChild(img1);

        const img2 = document.createElement('img')
        img2.src = `images/${playerSelection}.png`;
        img2.classList.add('compImage');
        compImage.appendChild(img2);

    }
    else if(playerSelection === 'rock'){
        if(computerSelection === 'scissors'){
            playerScore ++
            userScore.textContent = playerScore;
            outcome.textContent = 'You Win, Rock Beats Scissors!';
            const img2 = document.createElement('img');
            const img1 = document.createElement('img');
            img1.src = 'images/rock.png';
            img1.classList.add('playerImage');
            userImage.appendChild(img1);

            img2.src = 'images/scissors.png';
            img2.classList.add('compImage');
            compImage.appendChild(img2)
            
        }else{
            computerScore++;
            opScore.textContent = computerScore;
            outcome.textContent = 'You Lost, Paper beats Rock!';
            const img2 = document.createElement('img');
            const img1 = document.createElement('img');
            img1.src = 'images/rock.png';
            img1.classList.add('playerImage');
            userImage.appendChild(img1);
            img2.src = 'images/paper.png';
            img2.classList.add('compImage');
            compImage.appendChild(img2)
        }

    }
    else if(playerSelection === 'paper'){
        if(computerSelection=== 'rock'){
            playerScore++;
            userScore.textContent = playerScore;
            outcome.textContent = 'You Win, Paper Beats Rock';

            const img1 = document.createElement('img');
            img1.src = 'images/paper.png';
            img1.classList.add('playerImage');
            userImage.appendChild(img1);

            const img2 = document.createElement('img')
            img2.src = 'images/rock.png';
            img2.classList.add('compImage');
            compImage.appendChild(img2)
        }else{
            computerScore++;
            opScore.textContent =computerScore;
            outcome.textContent = 'You Lost, Scissors Beats Paper';

            const img1 = document.createElement('img');
            img1.src = 'images/paper.png';
            img1.classList.add('playerImage');
            userImage.appendChild(img1);

            const img2 = document.createElement('img')
            img2.src = 'images/scissors.png';
            img2.classList.add('compImage');
            compImage.appendChild(img2);
        }

    }
    else if(playerSelection === 'scissors'){
        if(computerSelection === 'paper'){
            playerScore++;
            userScore.textContent = playerScore;
            outcome.textContent = 'You Win, Scissors Beats Paper';

            const img1 = document.createElement('img');
            img1.src = 'images/scissors.png';
            img1.classList.add('playerImage');
            userImage.appendChild(img1);

            const img2 = document.createElement('img')
            img2.src = 'images/paper.png';
            img2.classList.add('compImage');
            compImage.appendChild(img2);
        }else{
            computerScore++;
            opScore.textContent = computerScore;
            outcome.textContent = "You Lost, Rock Beats Scissors";

            const img1 = document.createElement('img');
            img1.src = 'images/scissors.png';
            img1.classList.add('playerImage');
            userImage.appendChild(img1);

            const img2 = document.createElement('img')
            img2.src = 'images/rock.png';
            img2.classList.add('compImage');
            compImage.appendChild(img2);
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

