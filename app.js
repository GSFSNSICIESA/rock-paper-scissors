const playerChoice = document.getElementById("player");
const computerChoice = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const randomNumber = Math.floor(Math.random() * 3) + 1;

function getComputerChoice() {
  switch (randomNumber) {
    case 1:
      computerChoice.innerHTML = "Rock";
      break;
    case 2:
      computerChoice.innerHTML = "Paper";
      break;
    case 3:
      computerChoice.innerHTML = "Scissors";
      break;
  }
}

function getResult() {
  switch (playerChoice.innerHTML) {
    case "Rock":
      if (randomNumber === 3) {
        resultText.innerHTML = "You win!";
      } else {
        resultText.innerHTML = "You lose!";
      }
      break;
    case "Paper":
      if (randomNumber === 1) {
        resultText.innerHTML = "You win!";
      } else {
        resultText.innerHTML = "You lose!";
      }
      break;
    case "Scissors":
      if (randomNumber === 2) {
        resultText.innerHTML = "You win!";
      } else {
        resultText.innerHTML = "You lose!";
      }
      break;
  }
}

playerChoice.addEventListener("click", getResult);
getComputerChoice();
