let score = 0;
let computerScore = 0;
let matchesPlayed = 0;
let matchHistory = [];

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let roundResult;
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "paper") {
                roundResult = "You lose! Paper beats rock.";
                computerScore++;
            } else if (computerSelection === "scissors") {
                roundResult = "You win! Rock beats scissors.";
                score++;
            } else {
                roundResult = "It's a tie!";
            }
            break;
        case "paper":
            if (computerSelection === "scissors") {
                roundResult = "You lose! Scissors beat paper.";
                computerScore++;
            } else if (computerSelection === "rock") {
                roundResult = "You win! Paper beats rock.";
                score++;
            } else {
                roundResult = "It's a tie!";
            }
            break;
        case "scissors":
            if (computerSelection === "rock") {
                roundResult = "You lose! Rock beats scissors.";
                computerScore++;
            } else if (computerSelection === "paper") {
                roundResult = "You win! Scissors beat paper.";
                score++;
            } else {
                roundResult = "It's a tie!";
            }
            break;
    }
    matchesPlayed++;
    matchHistory.push({
        player: playerSelection,
        computer: computerSelection,
        result: roundResult
    });
    document.getElementById("roundResult").textContent = roundResult;
    document.getElementById("score").textContent = score;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("matchesPlayed").textContent = matchesPlayed;
    let matchHistoryList = document.getElementById("matchHistory");
    let li = document.createElement("li");
    li.textContent = `Player: ${playerSelection} | Computer: ${computerSelection} | Result: ${roundResult}`;
    matchHistoryList.insertBefore(li, matchHistoryList.childNodes[0]);
    if (matchesPlayed === 5) {
        endGame();
    }
}

function endGame() {
    let buttons = document.querySelectorAll(".buttons button");
    buttons.forEach((button) => {
        button.disabled = true;
    });
    let message = document.createElement("p");
    if (score > computerScore) {
        message.textContent = "Congrats! You won the game!";
        message.style.fontWeight = "bold";
        message.style.color = "#198754";
        message.style.fontSize = "40px";
    } else if (score < computerScore) {
        message.textContent = "Sorry, you lost the game.";
        message.style.fontWeight = "bold";
        message.style.color = "#dc3545"
        message.style.fontSize = "40px"
    } else {
        message.textContent = "It's a tie! Good game!";
        message.style.fontWeight = "bold";
        message.style.color = "#ffc107";
        message.style.fontSize = "40px";
    }
    let resultDiv = document.querySelector(".result");
    resultDiv.insertBefore(message, resultDiv.childNodes[0]).style.textAlign = "center";
}
