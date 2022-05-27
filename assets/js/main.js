// Input

const inputRounds5 = document.getElementById('inputRounds5');
const inputRounds10 = document.getElementById('inputRounds10');
const inputRounds15 = document.getElementById('inputRounds15');
const inputRounds20 = document.getElementById('inputRounds20');
let inputChoiceRock = document.getElementById('inputChoiceRock');
let inputChoicePaper = document.getElementById('inputChoicePaper');
let inputChoiceScissors = document.getElementById('inputChoiceScissors');

// Output

let outputRoundsCurrent = document.getElementById('outputRoundsCurrent');
let outputRoundsTotal = document.getElementById('outputRoundsTotal');
let outputScoreUser = document.getElementById('outputScoreUser');
let outputScoreComputer = document.getElementById('outputScoreComputer');
let outputResult = document.getElementById('outputResult');
let outputInstruction = document.getElementById('outputInstruction');

let rounds;
let usersChoice;
let computersChoice;
let scoreUser = 0;
let scoreComputer = 0;
let countRounds = 0;

// Set variables

outputRoundsCurrent.innerHTML = 0;
outputRoundsTotal.innerHTML = 0;
outputScoreUser.innerHTML = 0;
outputScoreComputer.innerHTML = 0;
outputResult.innerHTML = "Let's go";
outputInstruction.innerHTML = "Please select a number of rounds first."

// Select rounds

selectRounds = () => {
    if (inputRounds5.checked) {
        rounds = 5;
        outputRoundsTotal.innerHTML = rounds;
        outputInstruction.style.color = 'black';
        outputInstruction.innerHTML = 'Make a move.'
    }
    else if (inputRounds10.checked) {
        rounds = 10;
        outputRoundsTotal.innerHTML = rounds;
        outputInstruction.style.color = 'black';
        outputInstruction.innerHTML = 'Make a move.'
    }
    else if (inputRounds15.checked) {
        rounds = 15;
        outputRoundsTotal.innerHTML = rounds;
        outputInstruction.style.color = 'black';
        outputInstruction.innerHTML = 'Make a move.'
    }
    else if (inputRounds20.checked) {
        rounds = 20;
        outputRoundsTotal.innerHTML = rounds;
        outputInstruction.style.color = 'black';
        outputInstruction.innerHTML = 'Make a move.'
    }
}

// Computers Choice

getComputersChoice = () => {
    computersChoice = Math.floor(Math.random() * 3) + 1;
    switch (computersChoice) {
        case 1:
            computersChoice = 'rock'
            break;
        case 2:
            computersChoice = 'paper'
            break;
        case 3:
            computersChoice = 'scissors'
            break;
    }
}

// Who wins?

compareChoices = () => {
    switch (true) {
        case (usersChoice === 'rock' && computersChoice === 'rock'):
            countRounds++;
            outputRoundsCurrent.innerHTML = countRounds;
            outputResult.innerHTML = `It's a draw! You both chose ${(usersChoice.toUpperCase())}.`;
            outputResult.style.color = 'black';
            break;
        case (usersChoice === 'rock' && computersChoice === 'paper'):
            countRounds++;
            outputRoundsCurrent.innerHTML = countRounds;
            scoreComputer++;
            outputScoreComputer.innerHTML = scoreComputer;
            outputResult.innerHTML = `You lose! ${(usersChoice.toUpperCase())} is defeated by ${(computersChoice.toUpperCase())}.`
            outputResult.style.color = 'red';
            break;
        case (usersChoice === 'rock' && computersChoice === 'scissors'):
            countRounds++;
            outputRoundsCurrent.innerHTML = countRounds;
            scoreUser++;
            outputScoreUser.innerHTML = scoreUser;
            outputResult.innerHTML = `You win! ${(usersChoice.toUpperCase())} beats ${(computersChoice.toUpperCase())}.`
            outputResult.style.color = 'green';
            break;
        case (usersChoice === 'paper' && computersChoice === 'rock'):
            countRounds++;
            outputRoundsCurrent.innerHTML = countRounds;
            scoreUser++;
            outputScoreUser.innerHTML = scoreUser;
            outputResult.innerHTML = `You win! ${(usersChoice.toUpperCase())} beats ${(computersChoice.toUpperCase())}.`
            outputResult.style.color = 'green';
            break;
        case (usersChoice === 'paper' && computersChoice === 'paper'):
            countRounds++;
            outputRoundsCurrent.innerHTML = countRounds;
            outputResult.innerHTML = `It's a draw! You both chose ${(usersChoice.toUpperCase())}.`;
            outputResult.style.color = 'black';
            break;
        case (usersChoice === 'paper' && computersChoice === 'scissors'):
            countRounds++;
            outputRoundsCurrent.innerHTML = countRounds;
            scoreComputer++;
            outputScoreComputer.innerHTML = scoreComputer;
            outputResult.innerHTML = `You lose! ${(usersChoice.toUpperCase())} is defeated by ${(computersChoice.toUpperCase())}.`
            outputResult.style.color = 'red';
            break;
        case (usersChoice === 'scissors' && computersChoice === 'rock'):
            countRounds++;
            outputRoundsCurrent.innerHTML = countRounds;
            scoreComputer++;
            outputScoreComputer.innerHTML = scoreComputer;
            outputResult.innerHTML = `You lose! ${(usersChoice.toUpperCase())} is defeated by ${(computersChoice.toUpperCase())}.`
            outputResult.style.color = 'red';
            break;
        case (usersChoice === 'scissors' && computersChoice === 'paper'):
            countRounds++;
            outputRoundsCurrent.innerHTML = countRounds;
            scoreUser++;
            outputScoreUser.innerHTML = scoreUser;
            outputResult.innerHTML = `You win! ${(usersChoice.toUpperCase())} beats ${(computersChoice.toUpperCase())}.`
            outputResult.style.color = 'green';
            break;
        case (usersChoice === 'scissors' && computersChoice === 'scissors'):
            countRounds++;
            outputRoundsCurrent.innerHTML = countRounds;
            outputResult.innerHTML = `It's a draw! You both chose ${(usersChoice.toUpperCase())}.`;
            outputResult.style.color = 'black';
            break;
    }
    if (countRounds === rounds) {
        if (scoreUser < scoreComputer) {
            outputResult.innerHTML = `You lose... You ${scoreUser} : ${scoreComputer} Computer`;
            outputResult.style.color = 'red';
            outputInstruction.innerHTML = 'Hit RESTART to play again.';
        } else if (scoreUser > scoreComputer) {
            outputResult.innerHTML = `You win! You ${scoreUser} : ${scoreComputer} Computer`;
            outputResult.style.color = 'green';
            outputInstruction.innerHTML = 'Hit RESTART to play again.';
        } else if (scoreUser === scoreComputer) {
            outputResult.innerHTML = `It's a draw! ${scoreUser} Point(s)each`;
            outputResult.style.color = 'black';
            outputInstruction.innerHTML = 'Hit RESTART to play again.';
        }
    }
}

chooseRock = () => {
    usersChoice = 'rock';
    startGame();
}
choosePaper = () => {
    usersChoice = 'paper';
    startGame();
}
chooseScissors = () => {
    usersChoice = 'scissors';
    startGame();
}

startGame = () => {
    if (rounds > 0) {
        getComputersChoice();
        if (countRounds >= rounds) {
            button.style.display = 'none';
        }
        compareChoices();
    }
    else {
        outputInstruction.style.color = 'red';
    }
}


