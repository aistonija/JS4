// pasiimu grid-container
const gridContainer = document.querySelector(".grid");

// grid-container uzdedu eventListener, kad uzvedus pele atsirastu stilius
gridContainer.addEventListener("mouseover", () => {
  gridContainer.style.outline = "6px solid red";
});

// function border() {
//   gridContainer.style.outline = "6px solid red";
// }

// grid-container uzdedu eventListener, kad pelei pasitraukus atsirastu stilius
gridContainer.addEventListener("mouseleave", () => {
  gridContainer.style.outline = "none";
});

// Get all cells
const cells = document.querySelectorAll(".cell");

// Sukam cikla per visus grid-itemus, ir kiekvienam dedam po listeneri
for (let i = 0; i < cells.length; i++) {
  const eachCell = cells[i];

  eachCell.addEventListener("mouseenter", () => {
    eachCell.style.outline = "4px solid blue";
  });

  eachCell.addEventListener("mouseleave", () => {
    eachCell.style.outline = "none";
  });

  eachCell.addEventListener("click", () => {
    // console.log(eachCell.style.backgroundColor);

    if (eachCell.style.backgroundColor) {
      eachCell.style.backgroundColor = "";
    } else {
      eachCell.style.backgroundColor = `rgb(${randNum()}, ${randNum()}, ${randNum()})`;
    }
  });
}

// background-color: rgb(255, 255, 255);
function randNum() {
  return Math.floor(Math.random() * 256);
}
