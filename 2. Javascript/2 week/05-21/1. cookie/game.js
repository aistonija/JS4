// button variables
const goPlay = document.getElementById("goPlay");
const goShop = document.getElementById("goShop");
const goBack = document.getElementById("goBack");
const spinBtn = document.getElementById("spinCookie");
const addTwo = document.getElementById("addTwo");
// elements variables
const cookie = document.getElementById("cookie");
const score = document.getElementById("score");
const scoreText = document.querySelector(".scoreText");

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
spinBtn.addEventListener("click", startSpinning);
document.addEventListener("keydown", stopSpinning);
addTwo.addEventListener("click", buyTwoPoints);

// logic functions and etc.
function openGame() {
  startPage.style.display = "none";
  gamePage.style.display = "flex";
  shopPage.style.display = "none";
  scoreText.style.display = "block";
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

// update score dynamically
function updateScore() {
  score.textContent = counter;
}

// add points
function scorePoints() {
  // counter = counter + points;
  counter += points;
  updateScore();
}

// spin the cookie
function startSpinning() {
  // check if enough points
  if (counter >= 20) {
    // jeigu tasku uztenka - atimti
    //counter = counter - 20;
    counter -= 20;

    // paleisti sausaini suktis pridedant klase
    cookie.classList.add("rotate");

    // atnaujinti taskus
    updateScore();
    console.log(counter);
  } else {
    alert("Ya poor");
  }
}

// stop the spinning
function stopSpinning() {
  // sustabdyti sausaini suktis nuimant klase
  cookie.classList.remove("rotate");
}

// buy two points on click

function buyTwoPoints() {
  if (counter >= 100) {
    counter -= 100;
    updateScore();
    points = 2;
    addTwo.setAttribute("disabled", true);
  } else {
    alert("Ya poor");
  }
}
