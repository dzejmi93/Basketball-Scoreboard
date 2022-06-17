let score1 = 0;
let score2 = 0;
const plusOneLeft = document.getElementById("btn1-left");
const plusTwoLeft = document.getElementById("btn2-left");
const plusThreeLeft = document.getElementById("btn3-left");
const plusOneRight = document.getElementById("btn1-right");
const plusTwoRight = document.getElementById("btn2-right");
const plusThreeRight = document.getElementById("btn3-right");
const scoreOne = document.getElementById("score-1");
const scoreTwo = document.getElementById("score-2");
const newGame = document.getElementById("new-game");
scoreOne.textContent = score1;
scoreTwo.textContent = score2;

plusOneLeft.addEventListener("click", function () {
  score1++;
  scoreOne.textContent = score1;
});
plusTwoLeft.addEventListener("click", function () {
  score1 += 2;
  scoreOne.textContent = score1;
});
plusThreeLeft.addEventListener("click", function () {
  score1 += 3;
  scoreOne.textContent = score1;
});
plusOneRight.addEventListener("click", function () {
  score2++;
  scoreTwo.textContent = score2;
});
plusTwoRight.addEventListener("click", function () {
  score2 += 2;
  scoreTwo.textContent = score2;
});
plusThreeRight.addEventListener("click", function () {
  score2 += 3;
  scoreTwo.textContent = score2;
});
newGame.addEventListener("click", function () {
  score1 = 0;
  score2 = 0;
  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
  scoreOne.style.backgroundColor = "#080001";
  scoreTwo.style.backgroundColor = "#080001";
});
