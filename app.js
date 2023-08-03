let choices = ['rock', 'paper', 'scissors'];
function getComputerChoice(){
    computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;    
}
function game(){

        function playRound(playerSelection, computerSelection){
            if(playerSelection == computerSelection){
                console.log('draw')
            }else if(playerSelection == 'rock'){
        
                    if(computerSelection == 'paper'){
                        console.log('you lose!')
                    }else{
                        console.log('you win!')
                    }
            }else if(playerSelection == 'paper'){
                if(computerSelection== 'scissors'){
                    console.log('you lose!');
        
                }else{
                    console.log('you win!')
                }
                
            }else if (playerSelection =='scissors'){
                if (computerSelection == "rock"){
                    console.log('you lose!')
                }else{
                    console.log('you win!')
                }
            }
            }
        const playerSelection = 'rock';
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
                

    }

game();

