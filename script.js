const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const gameGround = document.querySelector('.gameContent');
const playerCount = document.querySelector('.playerCount');
const playerScore = document.querySelector('.playerScore');
playerCount.textContent = `The Player Score : `;
const aiCount = document.querySelector('.aiCount');
const aiScore = document.querySelector('.aiScore');
aiCount.textContent = `The AI Score : `;
const finalResult = document.querySelector('.resultGame');
const choices = ['rock', 'paper', 'scissors'];
function playerChoice(array, index){
    const pchoice = array[index];
    return pchoice;
}
function aiChoice(array){
    const randomNum = Math.floor(Math.random() * array.length);
    const achoice = array[randomNum]; 
    return achoice;
}
function playRound(player, ai){
    if(player === ai){
        gameGround.textContent = `It's a DRAW ! you both choosed ${player}`;
    } else if(player === 'rock' && ai === 'paper'){
        gameGround.textContent = 'AI Wins ! Paper beats Rock';
        aiScore.textContent += 'x';
    } else if(player === 'rock' && ai === 'scissors'){
        gameGround.textContent = 'You Wins ! Rock beats Scissors';
        playerScore.textContent += 'x';
    } else if(player === 'paper' && ai === 'rock'){
        gameGround.textContent = 'You Wins ! Paper beats Rock';
        playerScore.textContent += 'x';
    } else if(player === 'paper' && ai === 'scissors'){
        gameGround.textContent = 'AI Wins ! Scissors beats Paper';
        aiScore.textContent += 'x';
    } else if(player === 'scissors' && ai === 'rock'){
        gameGround.textContent = 'AI Wins ! Rock beats Scissors';
        aiScore.textContent += 'x';
    } else if(player === 'scissors' && ai === 'paper'){
        gameGround.textContent = 'You Wins ! Scissors beats Paper';
        playerScore.textContent += 'x';
    }
}

rockBtn.addEventListener('click', () => {
    playRound(playerChoice(choices,0), aiChoice(choices));
    if(aiScore.textContent === 'xxxxx'){
        gameGround.textContent = '';
        finalResult.textContent = 'You Lost ! The AI Win';
    } else if(playerScore.textContent === 'xxxxx'){
        gameGround.textContent = '';
        finalResult.textContent = 'Congratulations ! You Win';
    }

});
paperBtn.addEventListener('click', () => {
    playRound(playerChoice(choices,1), aiChoice(choices));
    if(aiScore.textContent == 'xxxxx'){
        gameGround.textContent = '';
        finalResult.textContent = 'You Lost ! The AI Win';
    } else if(playerScore.textContent == 'xxxxx'){
        gameGround.textContent = '';
        finalResult.textContent = 'Congratulations ! You Win';
    }
});
scissorsBtn.addEventListener('click', () => {
    playRound(playerChoice(choices,2), aiChoice(choices));
    if(aiScore.textContent === 'xxxxx'){
        gameGround.textContent = '';
        playerCount.textContent = '';
        aiCount.textContent = '';
        playerScore.textContent = '';
        aiScore.textContent = '';
        finalResult.textContent = 'You Lost ! The AI Win .';
    } else if(playerScore.textContent === 'xxxxx'){
        gameGround.textContent = '';
        playerCount.textContent = '';
        aiCount.textContent = '';
        playerScore.textContent = '';
        aiScore.textContent = '';
        finalResult.textContent = 'Congratulations ! You Win .';
    }
});