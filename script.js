let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0
const buttons = document.querySelectorAll(".button-selection")
const gameWindow = document.querySelector(".game-window")
const clearButton = document.querySelector(".button-clear")
const newGameButton = document.querySelector(".button-new-game")
buttons.forEach(
  (button)=>
  {
    button.addEventListener("click",game)
  }
)

clearButton.addEventListener("click",cleanLog)
newGameButton.addEventListener("click",startNewGame)

function getComputerChoice() {
  const avaiableChoices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return avaiableChoices[randomNum];
}
function playRound(e) {
  let playerSelection = e.target.dataset.choice;
  if (!["rock", "paper", "scissors"].includes(playerSelection)) {
    return `invalid choice`;
  }
  const computerSelection = getComputerChoice();
  return checkWinningCondition(playerSelection, computerSelection);
}

function checkWinningCondition(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    displayMsg(`Draw! Both players chose ${playerSelection}`)
    return;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    displayMsg(
      `You win! You picked ${playerSelection} which beats ${computerSelection}`
    );
    playerScore++;
    return;
  } else {
    displayMsg(
      `You lost! You picked ${playerSelection} which loses to ${computerSelection}`
    );
    computerScore++;
    return;
  }
}

function game(e) {
  playRound(e)
  roundsPlayed += 1
  if (roundsPlayed === 5)
  {
    displayScore()
    startNewGame()
    
  }

 

}


function displayMsg(msg)
{
  let para = document.createElement("p")
  para.classList.add("information")
  para.textContent = `> ${msg}`
  gameWindow.appendChild(para)

}



function cleanLog(e) {
  gameWindow.replaceChildren([])
}

function displayScore() {
  let result = playerScore > computerScore ? `You won with ${playerScore} points`
              : playerScore < computerScore
              ? `Computer won with ${computerScore} points`
              : `Draw`

  let para = document.createElement("p")
  let para2 = document.createElement("p")
  let para3= document.createElement("p")
  para.classList.add("score")
  para2.classList.add("score")
  para3.classList.add("score")
  para.style.color = "darkred"
  para.style.textDecoration = "black dashed underline"
  para3.style.borderBottom = "4px solid black"
  para.textContent = ` FINAL SCORE `
  para2.textContent = `Player: ${playerScore}, Computer: ${computerScore}`
  para3.textContent = `${result}`
  gameWindow.append(para,para2,para3)
}
function startNewGame(e){
  roundsPlayed = 0;
  playerScore = 0
  computerScore = 0
  if (e) {
    cleanLog()
  }
}