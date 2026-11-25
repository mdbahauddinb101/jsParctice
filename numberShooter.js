let numberContainer = document.querySelector(".numberContainer");
let timerValue = document.querySelector(".timerValue");
let targetValue = document.querySelector(".targetValue");
let scoreValue = document.querySelector(".scoreValue");

let numberOfCircles = 70;
let timer = 60;
let target = 0;
let score = 0; // was missing

function timerReset() {
  timerValue.innerText = timer;

  intervalId = setInterval(() => {
    timer--;
    timerValue.innerText = timer;

    if (timer <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(intervalId);

  numberContainer.innerHTML = `<div> game Over <button onclick=restartGame()> restart GAME</button> </div>`;
}

function generateTarget() {
  target = Math.ceil(Math.random() * 10); // no "let"
  targetValue.innerText = target;
}

function generateNumbers() {
  numberContainer.innerHTML = ""; // clear old circles
  for (let i = 1; i <= numberOfCircles; i++) {
    let divElem = document.createElement("div");
    divElem.className = "circle";
    divElem.innerText = Math.ceil(Math.random() * 10);
    numberContainer.append(divElem);
  }
}

function restartGame() {
  timer = 5;
  score = 0;
  scoreValue.innerText = score;
  generateNumbers();
  generateTarget();
  timerReset();
}

numberContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("circle")) {
    let number = Number(e.target.innerText);

    if (number === target) {
      score += 10;
      scoreValue.innerText = score;
    }
  }
  generateTarget(); // numbercontainer ey click kore target generate hote hobe
});

restartGame();
