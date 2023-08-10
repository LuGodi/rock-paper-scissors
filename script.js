let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".button-selection")
const gameWindow = document.querySelector(".game-window")

buttons.forEach(
  (button)=>
  {
    button.addEventListener("click",game)
  }
)

function getComputerChoice() {
  const avaiableChoices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return avaiableChoices[randomNum];
}

function playRound(e) {
  let playerSelection = e.target.dataset.choice;
  console.log("player choice is "+playerSelection)
  if (!["rock", "paper", "scissors"].includes(playerSelection)) {
    return `invalid choice`;
  }
  const computerSelection = getComputerChoice();
  return checkWinningCondition(playerSelection, computerSelection);
}

function checkWinningCondition(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`Draw! Both players chose ${playerSelection}`);
    displayMsg(`Draw! Both players chose ${playerSelection}`)
    return;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(
      `You win! You picked ${playerSelection} which beats ${computerSelection}`
    );
    displayMsg(
      `You win! You picked ${playerSelection} which beats ${computerSelection}`
    );
    playerScore++;
    return;
  } else {
    console.log(
      `You lost! You picked ${playerSelection} which loses to ${computerSelection}`
    );
    displayMsg(
      `You lost! You picked ${playerSelection} which loses to ${computerSelection}`
    );
    computerScore++;
    return;
  }
}

function game(e) {
  playerScore = 0;
  computerScore = 0;
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}:`);
    playRound(e);
  }
  console.log(
    `--- Final score -----
     Player: ${playerScore}, Computer: ${computerScore}`
  );
  console.log(
    `${
      playerScore > computerScore
        ? `You won with ${playerScore} points`
        : playerScore < computerScore
        ? `Computer won with ${computerScore} points`
        : `Draw`
    }`
  );
  //add scores
}


function displayMsg(msg)
{
  let para = document.createElement("p")
  para.classList.add("information")
  para.textContent = `> ${msg}`
  gameWindow.appendChild(para)

}