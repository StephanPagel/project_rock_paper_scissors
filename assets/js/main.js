'use strict'

// Input

const inputRounds5 = document.getElementById('inputRounds5');
const inputRounds10 = document.getElementById('inputRounds10');
const inputRounds15 = document.getElementById('inputRounds15');
const inputRounds20 = document.getElementById('inputRounds20');
const inputChoiceRock = document.getElementById("inputChoiceRock");
const inputChoicePaper = document.getElementById("inputChoicePaper");
const inputChoiceScissors = document.getElementById("inputChoiceScissors");
const inputButtons = document.getElementById("inputButtons");

// Output

const outputRoundsCurrent = document.getElementById("outputRoundsCurrent");
const outputRoundsTotal = document.getElementById("outputRoundsTotal");
const outputScoreUser = document.getElementById("outputScoreUser");
const outputScoreComputer = document.getElementById("outputScoreComputer");
const outputResult = document.getElementById("outputResult");
const outputInstruction = document.getElementById("outputInstruction");

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

const selectRounds = () => {
    if (inputRounds5.checked) {
        rounds = 5;
        outputRoundsTotal.innerHTML = rounds;
    }
    else if (inputRounds10.checked) {
        rounds = 10;
        outputRoundsTotal.innerHTML = rounds;
    }
    else if (inputRounds15.checked) {
        rounds = 15;
        outputRoundsTotal.innerHTML = rounds;
    }
    else if (inputRounds20.checked) {
        rounds = 20;
        outputRoundsTotal.innerHTML = rounds;
    }
    outputInstruction.style.color = 'black';
    outputInstruction.innerHTML = 'Make a move.'
}

// Computers Choice

const getComputersChoice = () => {
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

const compareChoices = () => {
    switch (true) {
        case (usersChoice === 'rock' && computersChoice === 'rock') ||
             (usersChoice === 'paper' && computersChoice === 'paper') ||
             (usersChoice === 'scissors' && computersChoice === 'scissors'):
            outputResult.innerHTML = `It's a draw! You both chose ${(usersChoice.toUpperCase())}.`;
            outputResult.style.color = 'orange';
            break;
        case (usersChoice === 'rock' && computersChoice === 'paper') ||
             (usersChoice === 'paper' && computersChoice === 'scissors') ||
             (usersChoice === 'scissors' && computersChoice === 'rock'):
            scoreComputer++;
            outputResult.innerHTML = `You lose! ${(usersChoice.toUpperCase())} is defeated by ${(computersChoice.toUpperCase())}.`
            outputResult.style.color = 'red';
            break;
        case (usersChoice === 'rock' && computersChoice === 'scissors') ||
             (usersChoice === 'scissors' && computersChoice === 'paper') ||
             (usersChoice === 'paper' && computersChoice === 'rock'):
            scoreUser++;
            outputResult.innerHTML = `You win! ${(usersChoice.toUpperCase())} beats ${(computersChoice.toUpperCase())}.`
            outputResult.style.color = 'green';
            break;
    }
    countRounds++;
    outputRoundsCurrent.innerHTML = countRounds;
    outputScoreUser.innerHTML = scoreUser;
    outputScoreComputer.innerHTML = scoreComputer;

    if (countRounds === rounds) {
        if (scoreUser < scoreComputer) {
            outputResult.innerHTML = `GAME OVER! You lose! 😟 You ${scoreUser} : ${scoreComputer} Computer`;
            outputResult.style.color = 'red';
        } else if (scoreUser > scoreComputer) {
            outputResult.innerHTML = `GAME OVER! You win! 🎉 You ${scoreUser} : ${scoreComputer} Computer`;
            outputResult.style.color = 'green';
        } else if (scoreUser === scoreComputer) {
            outputResult.innerHTML = `GAME OVER! It's a draw! 🤔 ${scoreUser} Point(s)each`;
            outputResult.style.color = 'orange';
        }
        outputInstruction.innerHTML = "Hit RESTART to play again.";
        outputInstruction.style.color = 'red';
    }
}

const chooseRock = () => {
    usersChoice = 'rock';
    startGame();
}
const choosePaper = () => {
    usersChoice = 'paper';
    startGame();
}
const chooseScissors = () => {
  usersChoice = "scissors";
  startGame();
};

const startGame = () => {
    if (rounds > 0) {
        getComputersChoice();
        if (countRounds === rounds-1) {
            inputButtons.style.display = 'none';
        }
        compareChoices();
    }
    else {
        outputInstruction.style.color = 'red';
    }
}


