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

const computerSelection=getComputerChoice();
const playerSelection=playerSelection.lowerCase();

function playRound(playerSelection,computerSelection){
 
    if (playerSelection==computerSelection){
        return "It's a tie?!";
    }else if (playerSelection=="rock" && computerSelection=="paper"){
        return "You lost! Paper beats rock, YOU OAF.";
    }else if (playerSelection=="rock" && computerSelection=="scissors"){
        return "You won! Rock beats scissors.";
    }else if (playerSelection=="paper" && computerSelection=="rock"){
        return "You won! Paper beats rock.";
    }else if (playerSelection=="paper" && computerSelection=="scissors"){
        return "You lost! Scissors beats paper, FOOL.";
    }else if (playerSelection=="scissors" && computerSelection=="rock"){
        return "You lost! Rock beats paper, GET GUD LOL.";
    }else if (playerSelection=="scissors" && computerSelection=="paper"){
        return "You won! Scissors beats paper.";
    }else
        return "That's not how you play the game!!!";
}

function playGame(){
    playerSelection=prompt ("Paper, scissors, or rock?");
    playRound(playerSelection,computerSelection);
    //repeat for five rounds and report a winner and loser at the end//
}