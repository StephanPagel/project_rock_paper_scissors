// Input

const inputRounds5 = document.getElementById('inputRounds5');
const inputRounds10 = document.getElementById('inputRounds10');
const inputRounds15 = document.getElementById('inputRounds15');
const inputRounds20 = document.getElementById('inputRounds20');
let inputChoiceRock = document.getElementById('inputChoiceRock');
let inputChoicePaper = document.getElementById('inputChoicePaper');
let inputChoiceScissors = document.getElementById('inputChoiceScissors');

// document.querySelector('#inputChoiceRock').addEventListener('click', function () {
//     usersChoice = 'rock';
//     console.log('users choice:', usersChoice);
// })
// document.querySelector('#inputChoicePaper').addEventListener('click', function () {
//     usersChoice = 'paper';
//     console.log('users choice:', usersChoice);
// })
// document.querySelector('#inputChoiceScissors').addEventListener('click', function () {
//     usersChoice = 'scissors';
//     console.log('users choice:', usersChoice);
// })

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

// Testing

outputRoundsCurrent.innerHTML = 0;
outputRoundsTotal.innerHTML = 0;
outputScoreUser.innerHTML = 0;
outputScoreComputer.innerHTML = 0;
outputResult.innerHTML = "Let's go";
outputInstruction.innerHTML = "Please select a number of rounds first."

// Set variables

// inputChoiceRock.addEventListener("click", () => {
//     inputChoiceRock.clicked = true;
// });
// inputChoicePaper.addEventListener("click", () => {
//     inputChoicePaper.clicked = true;
// });
// inputChoiceScissors.addEventListener("click", () => {
//     inputChoiceScissors.clicked = true;
// });

// Select rounds

selectRounds = () => {
    if (inputRounds5.checked) {
        rounds = 5;
        outputRoundsTotal.innerHTML = rounds;
        outputInstruction.style.color = 'black';
        outputInstruction.innerHTML = 'Make a move.'
        // console.log(rounds);
    }
    else if (inputRounds10.checked) {
        rounds = 10;
        outputRoundsTotal.innerHTML = rounds;
        outputInstruction.style.color = 'black';
        outputInstruction.innerHTML = 'Make a move.'
        // console.log(rounds);
    }
    else if (inputRounds15.checked) {
        rounds = 15;
        outputRoundsTotal.innerHTML = rounds;
        outputInstruction.style.color = 'black';
        outputInstruction.innerHTML = 'Make a move.'
        // console.log(rounds);
    }
    else if (inputRounds20.checked) {
        rounds = 20;
        outputRoundsTotal.innerHTML = rounds;
        outputInstruction.style.color = 'black';
        outputInstruction.innerHTML = 'Make a move.'
        // console.log(rounds);
    }
}

// getUsersChoice = () => {}

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
    // console.log(computersChoice);
}

compareChoices = () => {
    // usersChoice = 'rock';
    // let x = 0;
    // while (x <= rounds) {
    //     x++;

    switch (true) {
        case (usersChoice === 'rock' && computersChoice === 'rock'):
            countRounds++;
            outputRoundsCurrent.innerHTML = countRounds;
            outputResult.innerHTML = `It's a draw! You both chose ${(usersChoice.toUpperCase())}.`;
            break;
        case (usersChoice === 'rock' && computersChoice === 'paper'):
            // console.log('user: ', usersChoice);
            // console.log('computer: ', computersChoice);
            console.log('COMPUTER WINS');
            countRounds++;
            outputRoundsCurrent.innerHTML = countRounds;
            scoreComputer++;
            outputScoreComputer.innerHTML = scoreComputer;
            outputResult.innerHTML = `You lose! ${(usersChoice.toUpperCase())} is defeated by ${(computersChoice.toUpperCase())}.`
            // console.log(outputRoundsCurrent.value);
            break;
        case (usersChoice === 'rock' && computersChoice === 'scissors'):
            // console.log('user: ', usersChoice);
            // console.log('computer: ', computersChoice);
            console.log('YOU WIN');
            countRounds++;
            outputRoundsCurrent.innerHTML = countRounds;
            scoreUser++;
            outputScoreUser.innerHTML = scoreUser;
            outputResult.innerHTML = `You win! ${(usersChoice.toUpperCase())} beats ${(computersChoice.toUpperCase())}.`
            break;
        case (usersChoice === 'paper' && computersChoice === 'rock'):
            // console.log('user: ', usersChoice);
            // console.log('computer: ', computersChoice);
            console.log('YOU WIN');
            countRounds++;
            outputRoundsCurrent.innerHTML = countRounds;
            scoreUser++;
            outputScoreUser.innerHTML = scoreUser;
            outputResult.innerHTML = `You win! ${(usersChoice.toUpperCase())} beats ${(computersChoice.toUpperCase())}.`
            break;
        case (usersChoice === 'paper' && computersChoice === 'paper'):
            // console.log('user: ', usersChoice);
            // console.log('computer: ', computersChoice);
            console.log('TIE');
            countRounds++;
            outputRoundsCurrent.innerHTML = countRounds;
            outputResult.innerHTML = `It's a draw! You both chose ${(usersChoice.toUpperCase())}.`;
            break;
        case (usersChoice === 'paper' && computersChoice === 'scissors'):
            // console.log('user: ', usersChoice);
            // console.log('computer: ', computersChoice);
            console.log('COMPUTER WINS');
            countRounds++;
            outputRoundsCurrent.innerHTML = countRounds;
            scoreComputer++;
            outputScoreComputer.innerHTML = scoreComputer;
            outputResult.innerHTML = `You lose! ${(usersChoice.toUpperCase())} is defeated by ${(computersChoice.toUpperCase())}.`
            break;
        case (usersChoice === 'scissors' && computersChoice === 'rock'):
            // console.log('user: ', usersChoice);
            // console.log('computer: ', computersChoice);
            console.log('COMPUTER WINS');
            countRounds++;
            outputRoundsCurrent.innerHTML = countRounds;
            scoreComputer++;
            outputScoreComputer.innerHTML = scoreComputer;
            outputResult.innerHTML = `You lose! ${(usersChoice.toUpperCase())} is defeated by ${(computersChoice.toUpperCase())}.`
            break;
        case (usersChoice === 'scissors' && computersChoice === 'paper'):
            // console.log('user: ', usersChoice);
            // console.log('computer: ', computersChoice);
            console.log('YOU WIN');
            countRounds++;
            outputRoundsCurrent.innerHTML = countRounds;
            scoreUser++;
            outputScoreUser.innerHTML = scoreUser;
            outputResult.innerHTML = `You win! ${(usersChoice.toUpperCase())} beats ${(computersChoice.toUpperCase())}.`
            break;
        case (usersChoice === 'scissors' && computersChoice === 'scissors'):
            // console.log('user: ', usersChoice);
            // console.log('computer: ', computersChoice);
            console.log('TIE');
            countRounds++;
            outputRoundsCurrent.innerHTML = countRounds;
            outputResult.innerHTML = `It's a draw! You both chose ${(usersChoice.toUpperCase())}.`;
            break;
    }
    // if (x === rounds) {
    //     console.log('FINISHED', ' user: ', usersScore, ' computer: ', computersScore);
    //     break;
    // }

    if (countRounds === rounds) {
        if (scoreUser < scoreComputer) {
            outputResult.innerHTML = `You lose... You ${scoreUser} : ${scoreComputer} Computer`;
        } else if (scoreUser > scoreComputer) {
            outputResult.innerHTML = `You win! You ${scoreUser} : ${scoreComputer} Computer`;
        } else if (scoreUser === scoreComputer) {
            outputResult.innerHTML = `It's a draw! ${scoreUser} each`;
        }
        console.log('FINISHED', ' user: ', scoreUser, ' computer: ', scoreComputer);
        return;
    }
}

chooseRock = () => {
    usersChoice = 'rock';
    startGame();
}
choosePaper = () => {
    usersChoice = 'paper';
    // console.log(usersChoice);
    startGame();
}
chooseScissors = () => {
    usersChoice = 'scissors';
    startGame();
}

startGame = () => {
    if (rounds > 0) {
        // hide select round
        getComputersChoice();
        compareChoices();
    }
    else {
        outputInstruction.style.color = 'red';
    }

}

restartGame = () => {
    // reload page
}


