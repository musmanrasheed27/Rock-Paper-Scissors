let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".sel");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");
const restartBtn = document.querySelector(".restart");

// Function to generate computer choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Function to check winner
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    msg.innerText = `Draw! Both chose ${userChoice}`;
    msg.style.backgroundColor = "orange";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      userWin = compChoice === "rock" ? false : true;
    }

    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
  }
};

// Event listeners for choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// Corrected restart function
restartBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
  msg.innerText = "Play Your Move";
  msg.style.backgroundColor = "#081b31";
});