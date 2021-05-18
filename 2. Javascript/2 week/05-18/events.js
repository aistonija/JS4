// variables

const button = document.getElementById("change");
const body = document.querySelector("body");

// events
button.addEventListener("click", changeBackground);

// functions
function changeBackground() {
  const colors = [
    "skyblue",
    "red",
    "rgb(255,159,20)",
    "#C39FED",
    " #A6E2F7",
    "#F5D2C4",
  ];

  const colorPicker = Math.floor(Math.random() * colors.length);

  body.style.backgroundColor = colors[colorPicker];
}
