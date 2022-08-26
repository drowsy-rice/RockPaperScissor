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