const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const DRAW = 'DRAW';
const PLAYER_WINS = 'You Win!';
const COMPUTER_WINS = 'You lose';

const startGameBtn = document.getElementById('start-game-btn');
const paperBtn = document.getElementById('paper-btn');
const rockBtn = document.getElementById('rock-btn');
const scissorsBtn = document.getElementById('scissors-btn');
let gameIsRunning = false;

const getPlayerChoice = (selection) => {
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
} 

const getComputerChoice = function() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS; 
    }
}

const getWinner = function(computerChoice, PlayerChoice) {
    if (computerChoice === PlayerChoice) {
        return DRAW;
    } else if ( 
      computerChoice === ROCK && PlayerChoice === PAPER ||
      computerChoice === PAPER && PlayerChoice === SCISSORS ||
      computerChoice === SCISSORS && PlayerChoice === ROCK)
      {
          return PLAYER_WINS;
      } else {
          return COMPUTER_WINS;
      }
}

function startGame(selection) {
    if (gameIsRunning) {
         return;
     }
 
     gameIsRunning = true;
     console.log('Game is starting...');
     const playerSelection = selection;
     const computerSelection = getComputerChoice();
     const winner = getWinner(computerSelection, playerSelection);
     console.log(playerSelection);
     console.log(computerSelection);
     console.log(winner);
     gameIsRunning = false;
 }

 paperBtn.addEventListener('click', function(){
     startGame(PAPER);
 })

 rockBtn.addEventListener('click', function(){
    startGame(ROCK);
})

scissorsBtn.addEventListener('click', function(){
    startGame(SCISSORS);
})