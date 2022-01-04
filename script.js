const body = document.querySelector('body');
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
const playAgainBtn = document.createElement('button');
playAgainBtn.textContent = 'play again';
body.appendChild(playAgainBtn);
const choices = ['rock', 'paper', 'scissors'];
function playerChoice(array, index) {
    const pchoice = array[index];
    return pchoice;
}
function aiChoice(array) {
    const randomNum = Math.floor(Math.random() * array.length);
    const aihoice = array[randomNum];
    return aihoice;
}
function playRound(player, ai) {
    if (aiScore.textContent.length > 4 || playerScore.textContent.length > 4) {
        if (finalResult.textContent.length !== 0) { 
            playAgainBtn.addEventListener('click', () => {
                playerCount.textContent = `The Player Score : `;
                aiCount.textContent = `The AI Score : `;
                gameGround.textContent = '...';
                aiScore.textContent = '';
                playerScore.textContent = '';
                finalResult.textContent = '';
            });
        }
        alert(finalResult.textContent);
    } else {
        if (player === ai) {
            gameGround.textContent = `It's a DRAW ! you both choosed ${player}`;
        } else if (player === 'rock' && ai === 'paper') {
            gameGround.textContent = 'AI Wins ! Paper beats Rock';
            aiScore.textContent += 'x';
        } else if (player === 'rock' && ai === 'scissors') {
            gameGround.textContent = 'You Wins ! Rock beats Scissors';
            playerScore.textContent += 'x';
        } else if (player === 'paper' && ai === 'rock') {
            gameGround.textContent = 'You Wins ! Paper beats Rock';
            playerScore.textContent += 'x';
        } else if (player === 'paper' && ai === 'scissors') {
            gameGround.textContent = 'AI Wins ! Scissors beats Paper';
            aiScore.textContent += 'x';
        } else if (player === 'scissors' && ai === 'rock') {
            gameGround.textContent = 'AI Wins ! Rock beats Scissors';
            aiScore.textContent += 'x';
        } else if (player === 'scissors' && ai === 'paper') {
            gameGround.textContent = 'You Wins ! Scissors beats Paper';
            playerScore.textContent += 'x';
        }
    }
}
function playGame(index) {
    playRound(playerChoice(choices, index), aiChoice(choices));
    if (aiScore.textContent.length == 5) {
        gameGround.textContent = '';
        playerCount.textContent = '';
        aiCount.textContent = '';
        finalResult.textContent = 'You Lost ! The AI Win .';
    } else if (playerScore.textContent.length == 5) {
        gameGround.textContent = '';
        playerCount.textContent = '';
        aiCount.textContent = '';
        finalResult.textContent = 'Congratulations ! You Win .';
    }
}
rockBtn.addEventListener('click', () => { playGame(0) });
paperBtn.addEventListener('click', () => { playGame(1) });
scissorsBtn.addEventListener('click', () => { playGame(2) });

