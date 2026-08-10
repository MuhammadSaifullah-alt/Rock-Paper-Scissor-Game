let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userScoreC = document.querySelector(".userScore")
let compScoreC = document.querySelector(".compScore")

let userScore = 0;
let compScore = 0;

const compChoiceId = () => {
    let options = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random() * 3);
    return options[index];
}
let showWinner = (winner, compChoice, userChoice) => {
    if (winner) {
        userScore++;
        msg.innerText = `Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor = "Green";
        userScoreC.innerText = userScore;
    }
    else {
        compScore++;
        msg.innerText = `Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
        compScoreC.innerText = compScore;
    }
}

const playGame = (userChoiceId) => {
    let compChoice = compChoiceId();
    let userChoice = userChoiceId;
    
    if (userChoice === compChoice) {
        msg.innerText = `Game is DRAW`;
        msg.style.backgroundColor = "#242F40";
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, compChoice, userChoice)
    }
}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        let userChoiceId = choice.getAttribute("id")
        playGame(userChoiceId);
    })
});