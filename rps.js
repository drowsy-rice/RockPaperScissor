const fireButton=document.querySelector('#fireButton');
fireButton.addEventListener('click',function(){
    let playerSelection="fire";
    let computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection);
    finalResults();
});

const waterButton=document.querySelector('#waterButton');
waterButton.addEventListener('click',function(){
    let playerSelection="water";
    let computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection);
    finalResults();
});

const grassButton=document.querySelector('#grassButton');
grassButton.addEventListener('click',function(){
    let playerSelection="grass";
    let computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection);
    finalResults();
});

const resetButton=document.querySelector('#resetButton');
    resetButton.addEventListener('click', function(){
        playerScore=5; computerScore=5;
        h1.textContent = `ROCKET GRUNT'S HP: ${computerScore}`;
        h2.textContent = `YOUR HP: ${playerScore}`;
        document.querySelector('#messages').textContent="Choose Wisely";
        document.querySelector('#starters').style.visibility="visible";
}); 

function getComputerChoice(){
    let min=1
    let max=3
        rNumber=Math.floor(Math.random()*(max-min+1)+min);
   
    if (rNumber==1){
        return "fire";
    }else if (rNumber==2){
        return "water";
    }else
        return "grass";
};

let computerScore=5;
let playerScore=5;

function playRound(playerSelection,computerSelection){
    if (playerSelection==computerSelection){
        messages.textContent=("Stop copying me and pick a different Pokemon you twerp!");
    }else if (playerSelection=="fire" && computerSelection=="water"){
        computerScore--; messages.textContent=("Ha! I win this round! Water beats fire, YOU OAF!");
    }else if (playerSelection=="fire" && computerSelection=="grass"){
        playerScore--; messages.textContent=("You got lucky that time! Fire beats grass.");
    }else if (playerSelection=="water" && computerSelection=="rock"){
        playerScore--; messages.textContent=("You won that?? Water beats fire.");
    }else if (playerSelection=="water" && computerSelection=="grass"){
        computerScore--; messages.textContent=("Of course you lost that! Grass beats water, FOOL.");
    }else if (playerSelection=="grass" && computerSelection=="fire"){
        computerScore--; messages.textContent=("Don't you know fire beats grass?? GET GUD LOL.");
    }else if (playerSelection=="grass" && computerSelection=="water"){
        playerScore--; messages.textContent=("I let you win that! Grass beats water.");
    }
    h1.textContent = `ROCKET GRUNT'S HP: ${computerScore}`;
    h2.textContent = `YOUR HP: ${playerScore}`;
};

function finalResults(){
    if (playerScore==0){
        messages.textContent="HAHAHA! TEAM ROCKET IS VICTORIOUS!"; document.querySelector('#starters').style.visibility="hidden";
    }else if (computerScore==0){
        messages.textContent="You defeated me?? I'm telling Giovanni about this you brat..."; document.querySelector('#starters').style.visibility="hidden";
}};

const h1=document.createElement('h1');
h1.textContent=`ROCKET GRUNT'S HP: ${computerScore}`;
h1.style.border='thick solid red';
h1.style.backgroundColor='white';
scores.appendChild(h1);

const h2=document.createElement('h1');
h2.textContent=`YOUR HP: ${playerScore}`;
h2.style.border='thick solid green';
h2.style.backgroundColor='white';
scores.appendChild(h2);

