const rockButton=document.querySelector('#rockButton');
rockButton.addEventListener('click',function(){
    let playerSelection="rock";
    let computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection);
    gameScores();
});

const paperButton=document.querySelector('#paperButton');
paperButton.addEventListener('click',function(){
    let playerSelection="paper";
    let computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection);
    gameScores();
});

const scissorsButton=document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click',function(){
    let playerSelection="scissors";
    let computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection);
    gameScores();
});


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
}

let computerScore=0;
let playerScore=0;


function playRound(playerSelection,computerSelection){
 
    if (playerSelection==computerSelection){
        alert("It's a tie?!");
    }else if (playerSelection=="rock" && computerSelection=="paper"){
        computerScore++; alert("You lost! Paper beats rock, YOU OAF.");
    }else if (playerSelection=="rock" && computerSelection=="scissors"){
        playerScore++; alert("You won! Rock beats scissors.");
    }else if (playerSelection=="paper" && computerSelection=="rock"){
        playerScore++; alert("You won! Paper beats rock.");
    }else if (playerSelection=="paper" && computerSelection=="scissors"){
        computerScore++; alert("You lost! Scissors beats paper, FOOL.");
    }else if (playerSelection=="scissors" && computerSelection=="rock"){
        computerScore++; alert("You lost! Rock beats paper, GET GUD LOL.");
    }else if (playerSelection=="scissors" && computerSelection=="paper"){
        playerScore++; alert("You won! Scissors beats paper.");
    }};

function gameScores(){
    
    if (playerScore==5){
        playerScore=0; computerScore=0; alert("YOU WIN!!!!!!!");
    }else if (computerScore==5){
        playerScore=0; computerScore=0; alert("LOOOSERRR");
    }};