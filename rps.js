const rockButton=document.querySelector('#rockButton');
rockButton.addEventListener('click',function(){
    let playerSelection="rock";
    let computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection);
    finalResults();
});

const paperButton=document.querySelector('#paperButton');
paperButton.addEventListener('click',function(){
    let playerSelection="paper";
    let computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection);
    finalResults();
});

const scissorsButton=document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click',function(){
    let playerSelection="scissors";
    let computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection);
    finalResults();
});

const resetButton=document.querySelector('#resetButton');
    resetButton.addEventListener('click', function(){
        playerScore=0; computerScore=0;
        h1.textContent = `COMPUTER SCORE: ${computerScore}`;
        h2.textContent = `PLAYER SCORE: ${playerScore}`;
        h3.textContent="Choose Wisely";
        document.querySelector('#starters').style.visibility="visible";
}) 

function getComputerChoice(){
    let min=1
    let max=3
        rNumber=Math.floor(Math.random()*(max-min+1)+min);
   
    if (rNumber==1){
        return "rock";
    }else if (rNumber==2){
        return "paper";
    }else
        return "scissors";
};

let computerScore=0;
let playerScore=0;

function playRound(playerSelection,computerSelection){
    if (playerSelection==computerSelection){
        h3.textContent=("It's a tie?!");
    }else if (playerSelection=="rock" && computerSelection=="paper"){
        computerScore++; h3.textContent=("You lost! Paper beats rock, YOU OAF.");
    }else if (playerSelection=="rock" && computerSelection=="scissors"){
        playerScore++; h3.textContent=("You won! Rock beats scissors.");
    }else if (playerSelection=="paper" && computerSelection=="rock"){
        playerScore++; h3.textContent=("You won! Paper beats rock.");
    }else if (playerSelection=="paper" && computerSelection=="scissors"){
        computerScore++; h3.textContent=("You lost! Scissors beats paper, FOOL.");
    }else if (playerSelection=="scissors" && computerSelection=="rock"){
        computerScore++; h3.textContent=("You lost! Rock beats paper, GET GUD LOL.");
    }else if (playerSelection=="scissors" && computerSelection=="paper"){
        playerScore++; h3.textContent=("You won! Scissors beats paper.");
    }
    h1.textContent = `COMPUTER SCORE: ${computerScore}`;
    h2.textContent = `PLAYER SCORE: ${playerScore}`;
};

function finalResults(){
    if (playerScore==5){
        h3.textContent=("YOU WIN!!!!!!!"); document.querySelector('#starters').style.visibility="hidden";
    }else if (computerScore==5){
        h3.textContent=("YOU HAVE FAILED EVERYONE, TRY AGAIN!"); document.querySelector('#starters').style.visibility="hidden";
}};

const h1=document.createElement('h1');
h1.textContent=`COMPUTER SCORE: ${computerScore}`;
h1.style.border='thick solid red';
scores.appendChild(h1);

const h2=document.createElement('h1');
h2.textContent=`PLAYER SCORE: ${playerScore}`;
h2.style.border='thick solid green';
scores.appendChild(h2);

const h3=document.createElement('h1');
h3.textContent="Choose Wisely"
h3.style.border='thick solid black';
scores.appendChild(h3);
