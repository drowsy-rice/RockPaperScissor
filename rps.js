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
let i=0;

function playRound(playerSelection,computerSelection){
 
    if (playerSelection==computerSelection){
        return "It's a tie?!";
    }else if (playerSelection=="rock" && computerSelection=="paper"){
        computerScore++; return "You lost! Paper beats rock, YOU OAF.";
    }else if (playerSelection=="rock" && computerSelection=="scissors"){
        playerScore++; return "You won! Rock beats scissors.";
    }else if (playerSelection=="paper" && computerSelection=="rock"){
        playerScore++; return "You won! Paper beats rock.";
    }else if (playerSelection=="paper" && computerSelection=="scissors"){
        computerScore++; return "You lost! Scissors beats paper, FOOL.";
    }else if (playerSelection=="scissors" && computerSelection=="rock"){
        computerScore++; return "You lost! Rock beats paper, GET GUD LOL.";
    }else if (playerSelection=="scissors" && computerSelection=="paper"){
        playerScore++; return "You won! Scissors beats paper.";
    }else
        i=i-1; return "That's not how you play the game!!!";
        
}

function playGame(){
    while (i<5){
        const computerSelection=getComputerChoice();
        const playerSelection=prompt ("Paper, scissors, or rock?").toLowerCase();
        console.log (playRound(playerSelection,computerSelection));
        i++;
    }
    if (playerScore>computerScore){
        playerScore=0; computerScore=0; i=0; return "YOU WIN!!!!!!!";
    }else if (playerScore<computerScore){
        playerScore=0; computerScore=0; i=0; return "LOOOSERRR";
    }else 
        playerScore=0; computerScore=0; i=0; return "It's a tie!";
}
