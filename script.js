function getComputerChoice() {
  const avaiableChoices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return avaiableChoices[randomNum];
}

function playRound() {
  let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
  if (!["rock", "paper", "scissors"].includes(playerSelection)) {
    return `invalid choice`;
  }

  const computerSelection = getComputerChoice();
  return checkWinningCondition(playerSelection, computerSelection);
}

function checkWinningCondition(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Draw! Both players chose ${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! You picked ${playerSelection} which beats ${computerSelection}`;
  } else {
    return `You lost! You picked ${playerSelection} which loses to ${computerSelection}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
  //add scores
}
