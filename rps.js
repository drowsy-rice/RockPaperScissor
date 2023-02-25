let playchar = function(){document.querySelector("#charizardcry").play()}
let playblast = function(){document.querySelector("#blastoisecry").play()}
let playvena = function(){document.querySelector("#venasaurcry").play()}
let playselect = function(){document.querySelector("#select").play()}

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
        document.querySelector('#messages').textContent="Team Rocket Grunt Challenges You to a Pokemon Battle!";
        document.querySelector('#fireButton').style.backgroundImage="url(rps_photos/charizard.png)";
        document.querySelector('#waterButton').style.backgroundImage="url(rps_photos/blastoise.png)";
        document.querySelector('#grassButton').style.backgroundImage="url(rps_photos/venasaur.png)";
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
    if (playerSelection==computerSelection && (playerScore && computerScore)>0){
        messages.textContent=("Stop copying me and pick a different Pokemon you twerp!");
        flash.style.backgroundColor = "yellow";
        setTimeout(function(){
            flash.style.backgroundColor = originalColor;
          }, 1000);
    }else if (playerSelection=="fire" && computerSelection=="water" && (playerScore && computerScore)>0){
        computerScore--; messages.textContent=("Ha! I chose Blastoise! Water beats fire, YOU OAF!");
        flash.style.backgroundColor = "yellow";
        setTimeout(function(){
            flash.style.backgroundColor = originalColor;
          }, 1000);
    }else if (playerSelection=="fire" && computerSelection=="grass" && (playerScore && computerScore)>0){
        playerScore--; messages.textContent=("No fair! My Venasaur's a weakling! You got lucky that time!");
        flash.style.backgroundColor = "yellow";
        setTimeout(function(){
            flash.style.backgroundColor = originalColor;
          }, 1000);
    }else if (playerSelection=="water" && computerSelection=="fire" && (playerScore && computerScore)>0){
        playerScore--; messages.textContent=("You won that?? I must have a defective Charizard or something...");
        flash.style.backgroundColor = "yellow";
        setTimeout(function(){
            flash.style.backgroundColor = originalColor;
          }, 1000);
    }else if (playerSelection=="water" && computerSelection=="grass" && (playerScore && computerScore)>0){
        computerScore--; messages.textContent=("Of course you lost that! I gave my Venasaur steroids, FOOL!");
        flash.style.backgroundColor = "yellow";
        setTimeout(function(){
            flash.style.backgroundColor = originalColor;
          }, 1000);
    }else if (playerSelection=="grass" && computerSelection=="fire" && (playerScore && computerScore)>0){
        computerScore--; messages.textContent=("Didn't you know my Charizard would kick your grass?? GET GUD LOL.");
        flash.style.backgroundColor = "yellow";
        setTimeout(function(){
            flash.style.backgroundColor = originalColor;
          }, 1000);
    }else if (playerSelection=="grass" && computerSelection=="water" && (playerScore && computerScore)>0){
        playerScore--; messages.textContent=("WHAT? I would've won if I had a Mewtwo instead of this stupid, overgrown turtle.");
        flash.style.backgroundColor = "yellow";
        setTimeout(function(){
            flash.style.backgroundColor = originalColor;
          }, 1000);
    }
    h1.textContent = `ROCKET GRUNT'S HP: ${computerScore}`;
    h2.textContent = `YOUR HP: ${playerScore}`;
};

function finalResults(){
    if (playerScore==0){
        messages.textContent="HAHAHA! TEAM ROCKET IS VICTORIOUS!"; 
        document.querySelector('#fireButton').style.backgroundImage="url(rps_photos/pokeball.png)";
        document.querySelector('#waterButton').style.backgroundImage="url(rps_photos/pokeball.png)";
        document.querySelector('#grassButton').style.backgroundImage="url(rps_photos/pokeball.png)";
    }else if (computerScore==0){
        messages.textContent="You defeated me?? I'm telling Giovanni about this you brat..."; 
        document.querySelector('#fireButton').style.backgroundImage="url(rps_photos/pokeball.png)";
        document.querySelector('#waterButton').style.backgroundImage="url(rps_photos/pokeball.png)";
        document.querySelector('#grassButton').style.backgroundImage="url(rps_photos/pokeball.png)";
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

var flash = document.querySelector("#messages");
var originalColor = getComputedStyle(flash).backgroundColor; // Store original color (red)
  // Change color
// Set a timer to run the passed function after 1000 milliseconds (1 second)

