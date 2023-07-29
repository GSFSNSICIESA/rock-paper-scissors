
let choices = ['rock', 'paper', "scissors"]
// let playerChoice =  prompt("choose:", "" )
function getComputerChoice(){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;
}
// function getPlayerChoice(){
//     let playerChoice =  prompt("choose:", "" )
//     return playerChoice;
// }
// getPlayerChoice();
// getComputerChoice();


function playRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection){
        console.log("draw")
    }else{
        if(playerSelection == "rock"){
            if(computerSelection == "Paper"){
                console.log("you lose!")
            }else{
                console.log("you win!")
            }
    
        }
        if(playerSelection == "paper"){
            if(computerSelection == "Scissors"){
                console.log("you lose!")
            }else{
                console.log("you win!")
            }
    
        }
        if(playerSelection == "scissors"){
            if(computerSelection == "Rock"){
                console.log("you lose!")
            }else{
                console.log("you win!")
            }
    
        }
    }}
  let playerSelection = prompt("type");
  const computerSelection = getComputerChoice();
  console.log(computerSelection);

  console.log(playRound(playerSelection, computerSelection));