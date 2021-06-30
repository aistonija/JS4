const form = document.querySelector("form");
const list = document.querySelector("ol");
const errorBox = document.querySelector(".errorBox");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const item = event.target[0].value;
  console.log(event.target);
  // event.target[0].value = "";
  errorBox.innerHTML = "";

  if (item != "") {
    addRow(item);
  } else {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Please Enter Item!";
    errorMessage.style.color = "red";
    errorMessage.style.textAlign = "center";
    errorBox.append(errorMessage);
  }
});

function addRow(inputValue) {
  const li = document.createElement("li");
  li.textContent = inputValue;
  li.addEventListener("click", () => {
    li.style.textDecorationLine = "line-through";
  });
  list.append(li);
}
