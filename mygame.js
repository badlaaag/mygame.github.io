let score = 0;
let computerScore = 0;
let tieScore = 0;
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
                tieScore++;
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
                tieScore++;
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
                tieScore++;
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
    document.getElementById("tieScore").textContent = tieScore;
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
    function resetGame() {
    score = 0;
    computerScore = 0;
    tieScore = 0;
    matchesPlayed = 0;
    matchHistory = [];
    document.getElementById("roundResult").textContent = "";
    document.getElementById("score").textContent = score;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("tieScore").textContent = tieScore;
    document.getElementById("matchesPlayed").textContent = matchesPlayed;
    let matchHistoryList = document.getElementById("matchHistory");
    matchHistoryList.innerHTML = "";
    let buttons = document.querySelectorAll(".buttons button");
    buttons.forEach((button) => {
        button.disabled = false;
    });
    console.log("resetGame called");
    let message = document.getElementById("endGameMessage");
    message.textContent = "";
    message.style.fontWeight = "";
    message.style.color = "";
    message.style.fontSize = "";

}

document.querySelector("#resetButton").addEventListener("click", resetGame);
