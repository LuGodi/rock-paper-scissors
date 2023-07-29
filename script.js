function getComputerChoice() {
  const avaiableChoices = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return avaiableChoices[randomNum];
}
