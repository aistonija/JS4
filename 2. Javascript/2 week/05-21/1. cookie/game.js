// button variables
const goPlay = document.getElementById("goPlay");
const goShop = document.getElementById("goShop");
const goBack = document.getElementById("goBack");

// elements variables
const cookie = document.getElementById("cookie");
const score = document.getElementById("score");

// pages variables
const startPage = document.getElementById("startPage");
const gamePage = document.getElementById("gamePage");
const shopPage = document.getElementById("shopPage");

// events
goPlay.addEventListener("click", openGame);
goShop.addEventListener("click", openShop);
goBack.addEventListener("click", openGame);
cookie.addEventListener("mouseover", resize);
cookie.addEventListener("mouseleave", resizeBack);
cookie.addEventListener("click", scorePoints);

// logic functions and etc.
function openGame() {
  startPage.style.display = "none";
  gamePage.style.display = "flex";
  shopPage.style.display = "none";
}

function openShop() {
  gamePage.style.display = "none";
  shopPage.style.display = "flex";
}

// task -> scale the cookie
// pasirasyti funkcijas
// uzvedus pele ant cookie nuotraukas, ji padideja scale.
// pele patraukus nuo cookie nuotraukos, ji grizta i savo orginalu dydi.

function resize() {
  cookie.style.transform = "scale(1.1)";
}

function resizeBack() {
  cookie.style.transform = "scale(1)";
}

// counter - atskaitos taskas
let counter = 0;
// tasku skaicius uz viena click
let points = 1;

// update score
function updateScore() {
  score.textContent = counter;
}

// add points
function scorePoints() {
  // counter = counter + points;
  counter += points;
  updateScore();
}
