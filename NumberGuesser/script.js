let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random()*9);
}

function compareGuesses(human, computer, target) {
    let humanDiff = Math.abs(target - human);
    let computerDiff = Math.abs(target - computer);
    if (humanDiff < computerDiff) {
        return true;
    } else if (humanDiff > computerDiff) {
        return false;
    } else {
        return true;
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    };
}

function advanceRound() {
    currentRoundNumber++;
}


// target = 5
// human = 3
// computer = 8