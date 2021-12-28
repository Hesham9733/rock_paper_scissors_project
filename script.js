function computerPlay() {
    const playList = ['Rock', 'Paper', 'Scissors'];
    const computerSelection = playList[Math.floor(Math.random() * (playList.length))];
    console.log(computerSelection);
    return computerSelection;
}
function playerPlay() {
    const playerSelection = prompt('Choose between ( Rock - Paper - Scissors ) ?');
    console.log(playerSelection);
    return playerSelection;
    
}
let playerScore = 0;
let computerScore = 0;
function playRound(computer,player){
    if(computer.toLowerCase() === player.toLowerCase()){
        alert(`It's Draw ! you both choosed ${computer}`);
    } else if(computer.toLowerCase() == 'rock' && player.toLowerCase() == 'paper'){
        playerScore += 1;
        alert('The Player Wins ! Paper beats Rock');
    } else if(computer.toLowerCase() == 'rock' && player.toLowerCase() == 'scissors'){
        computerScore += 1;
        alert('The Computer Wins ! Rock beats Scissors');
    } else if(player.toLowerCase() == 'rock' && computer.toLowerCase() == 'paper'){
        computerScore += 1;
        alert('The Computer Wins ! Paper beats Rock');
    } else if(player.toLowerCase() == 'rock' && computer.toLowerCase() == 'scissors'){
        playerScore += 1;
        alert('The Player Wins ! Rock beats Scissors');
    } else if(player.toLowerCase() == 'scissors' && computer.toLowerCase() == 'paper'){
        alert('The Player Wins ! Scissors beats Paper');
    } else if(computer.toLowerCase() == 'scissors' && player.toLowerCase() == 'paper'){
        alert('The Computer Wins ! Scissors beats Paper');
    } else {
        alert('You entered a wrond choice !');
    }
    return playerScore,computerScore;
}
for(i=0; i < 5; i++){
    playRound(computerPlay(),playerPlay());
}
if(playerScore > computerScore){
    alert('The Player is The Winner !!!!!!!!! ');
} else if(computerScore > playerScore){
    alert('The Computer is The Winner !!!!!!!!!');
} else if(playerScore === computerScore){
    alert("It's Draw ! Play again !");
}



