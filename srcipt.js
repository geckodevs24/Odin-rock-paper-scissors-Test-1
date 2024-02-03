const options = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice
}

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return "Tie"
    }else if(
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ){
        return 'player'
    }else {
        return 'Computer'
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection)
    if(result == 'Tie'){
        return "it's a Tie"
    }else if(result == 'player'){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoise() {
    let validatedInput = false;
    while(validatedInput  == false){
        const choise = prompt ('Rock Paper Scissors')
        if (choise == null){
            continue;
        }
        const choiceInLower = choise.toLowerCase()
        if(options.includes(choiceInLower)){
            validatedInput = true
            return choiceInLower
        }
    }
}

    function game() {
        let playerScore = 0;
        let ComputerScore = 0;
        for (let i = 0; i < 5; i++) {
            const playerSelection = getPlayerChoise();
            const computerSelection = getComputerChoice()
            console.log(playRound(playerSelection, computerSelection))
            if(checkWinner(playerSelection, computerSelection) == 'player'){
                playerScore++
            }
            else if(checkWinner(playerSelection, computerSelection) == 'Computer'){
                ComputerScore++
            }
        }
    console.log('Game Over')
    if(playerScore > ComputerScore){
    console.log('Player is the winner')
    }else if(playerScore < ComputerScore){
    console.log("Computer is the Winner")
    }else{
    console.log('its a tie')}
}

game()