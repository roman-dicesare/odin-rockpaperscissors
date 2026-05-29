
let playerTotalScore = 0;
let computerTotalScore = 0;

// setting up DOM

const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorButton = document.querySelector("#scissor-btn");

const pcScore = document.querySelector("#playerScore");
const npcScore = document.querySelector("#computerScore");
const winnerLang = document.querySelector("#winnerLang");

const finalWinner = document.querySelector("#finalWinner");


rockButton.addEventListener("click", function(){
    playRound("rock", getComputerChoice());
    getWinner(playerTotalScore,computerTotalScore);
});

paperButton.addEventListener("click",function(){
    playRound("paper", getComputerChoice());
    getWinner(playerTotalScore,computerTotalScore);
});

scissorButton.addEventListener("click", function(){
    playRound("scissor",getComputerChoice());
    getWinner(playerTotalScore,computerTotalScore);
});




// Game Logic

function playRound(humanChoice, computerChoice){
    
    if (humanChoice === "rock"){
        if (computerChoice === "rock"){
            winnerLang.textContent = "That Round is A Tie, Try Again!"
        }
        if (computerChoice === "paper"){
            computerTotalScore++;
            winnerLang.textContent = "The Computer Wins That Round!"
        }
        if (computerChoice === "scissors"){
            playerTotalScore++;
            winnerLang.textContent = "You Win This Round!"
        }
        pcScore.textContent = playerTotalScore;
        npcScore.textContent = computerTotalScore;
    }

    if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            playerTotalScore++
            winnerLang.textContent = "You Win This Round!"
        }
        if (computerChoice === "paper"){
            winnerLang.textContent = "That Round is A Tie, Try Again!"
        }
        if (computerChoice === "scissors"){
            computerTotalScore++
            winnerLang.textContent = "The Computer Wins That Round!"
        }

        pcScore.textContent = playerTotalScore;
        npcScore.textContent = computerTotalScore;
    }

    if (humanChoice === "scissors"){
        if (computerChoice === "rock"){
            computerTotalScore++
            winnerLang.textContent = "The Computer Wins That Round!"
        }
        if (computerChoice === "paper"){
            playerTotalScore++
            winnerLang.textContent = "You Win This Round!"
        }
        if (computerChoice === "scissors"){
            winnerLang.textContent = "That Round is A Tie, Try Again!"
        }

        pcScore.textContent = playerTotalScore;
        npcScore.textContent = computerTotalScore;
    }
}

function getWinner(playerTotalScore, computerTotalScore){
    let winner;

    if (playerTotalScore >= 5 || computerTotalScore >= 5){
        if (playerTotalScore > computerTotalScore){
            winner = "You Win!"
            finalWinner.textContent = winner
            cleanUpScreen();
        }
        else if (playerTotalScore < computerTotalScore){
            winner = "The Computer Wins!"
            finalWinner.textContent = winner
            cleanUpScreen();
        }
        else if (playerTotalScore === computerTotalScore){
            winner = "It's a Tie!"
            finalWinner.textContent = winner
            cleanUpScreen();
        }
        else {
            winner = "It's too close to call, keep playing!"
            finalWinner.textContent = winner
        }
    }

}

function getComputerChoice(){
    let randomNum = Math.random()

    if (randomNum >= 0.66){
        return "rock"
    } else if (randomNum <= 0.66 && randomNum >= 0.33){
        return "paper"
    } else if (randomNum <= 0.33){
        return "scissors"
    }
}

function cleanUpScreen(){
            rockButton.style.display = "none"
            paperButton.style.display = "none"
            scissorButton.style.display = "none"
}