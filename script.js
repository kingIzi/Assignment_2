const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    }
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return 1;
    }
    return -1;
}

function parsePlayerSelection(playerSelection) {
    if (playerSelection === null) return null;
    return playerSelection.trim().toLowerCase();
}

function game() {
    alert(
        "Welcome to Rock Paper Scissors! 🪨📄✂️\n\n" +
        "HOW TO PLAY:\n" +
        "- Each round, type rock, paper or scissors into the prompt.\n" +
        "- First to win 3 times wins the game. Draws give no points.\n" +
        "- Invalid entries don't count — you'll be asked again.\n" +
        "- Type quit() or press Cancel at any time to exit.\n\n" +
        "THE STAKES: If you win, humanity still has a chance against AI! 🤗\n" +
        "But if you lose... the robots will take over the world! 🤖🌍\n\n" +
        "All messages and results will appear in these pop-up dialogs.\n" +
        "Good luck!"
    );
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 3 && computerScore < 3) {
        const playerSelection = prompt(
            `Score — You: ${playerScore} | Computer: ${computerScore}\n\nWhat do you choose? (rock, paper or scissors)`
        );
        const parsedSelection = parsePlayerSelection(playerSelection);
        if (parsedSelection === null) {
            alert("Game cancelled. Thanks for playing! 👋");
            return;
        }
        if (parsedSelection === "quit()") {
            if (confirm("Are you sure you want to quit?")) {
                alert("You quit the game. Thanks for playing! 👋");
                return;
            }
            continue;
        }
        if (!choices.includes(parsedSelection)) {
            alert("You must input either rock, paper or scissors.\nType quit() or press Cancel to exit.");
            continue;
        }
        const computerSelection = computerPlay();
        const result = playRound(parsedSelection, computerSelection);
        if (result === 1) {
            playerScore++;
            alert(`${parsedSelection} beats ${computerSelection}! \nYou Win!💪🏿💪🏿`);
        } else if (result === 0) {
            alert(`It's a tie!🧐🧐`);
        } else {
            computerScore++;
            alert(`${computerSelection} beats ${parsedSelection}!  \nYou Lose!🦾🦾`);
        }
    }
    if (playerScore === 3) {
        alert("You beat the computer!🤗🤗 Congratulations!");
    } else {
        alert("The computer beat you!🤖🤖 Better luck next time!");
    }
}

game()
