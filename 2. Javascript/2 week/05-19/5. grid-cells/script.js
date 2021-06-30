/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const gridContainer = document.querySelector(".grid");

gridContainer.addEventListener("mouseover", () => {
  gridContainer.style.outline = "6px solid red";
});

gridContainer.addEventListener("mouseleave", () => {
  gridContainer.style.outline = "none";
});

// Get all cells
const cells = document.querySelectorAll(".cell");
// console.log(cells);

/**
 * Function to generate random hex color
 */
const randColor = () => {
  let hexColor = Math.floor(Math.random() * 16777215).toString(16);
  return hexColor;
};

cells.forEach((cell) => {
  //set outline when hovered
  cell.addEventListener("mouseenter", () => {
    cell.style.outline = "4px solid blue";
  });

  //remove outline when mouse leaves
  cell.addEventListener("mouseleave", () => {
    cell.style.outline = "none";
  });

  cell.addEventListener("click", () => {
    if (cell.style.backgroundColor) {
      cell.style.backgroundColor = "";
    } else {
      cell.style.backgroundColor = `#${randColor()}`;
    }
  });
});

/* - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const body = document.querySelector("body");

body.addEventListener("keyup", (e) => {
  console.log(e);
  if (e.key === "r") {
    if (body.style.backgroundColor === "") {
      body.style.backgroundColor = "blue";
    } else {
      body.style.backgroundColor = "";
    }
  }
});
