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

function playGame(playerSelection,computerSelection){
    let computerSelection=getComputerChoice
    let playerSelection=playerSelection.lowerCase

    if (playerSelection)==(computerSelection){
        return "It's a tie?!";
    }else if (playerSelection)=="rock" && (computerSelection)=="paper"{
        return "You lost! Paper beats rock, IDIOT.";
    }else if (playerSelection)=="rock" && (computerSelection)=="scissors"{
        return "You won! Rock beats scissors.";
    }else if (playerSelection)=="paper" && (computerSelection)=="rock"{
        return "You won! Paper beats rock.";
    }else if (playerSelection)=="paper" && (computerSelection)=="scissors"{
            return "You lost! Scissors beats paper, FOOL.";
    }else if (playerSelection)=="scissors" && (computerSelection)=="rock"{
                return "You lost! Rock beats paper, OOF.";
    }else if (playerSelection)=="scissors" && (computerSelection)=="paper"{
        return "You won! Scissors beats paper.";
    }else
        return "That's not how you play the game!!!";
}