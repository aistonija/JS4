const form = document.querySelector("form");
const output = document.querySelector(".printed");

form.addEventListener("submit", (a) => {
  a.preventDefault();
  console.log(a);

  const input1 = document.querySelector('input[type="text"]');
  const input2 = document.querySelector('input[type="email"]');

  printOut(input1.value, input2.value);

  input1.value = "";
  input2.value = "";
});

function printOut(value1, value2) {
  const message = document.createElement("p");
  const print1 = document.createElement("h2");
  const print2 = document.createElement("h2");

  print1.textContent = value1;
  print2.textContent = value2;
  message.textContent = "You've got mailed!";

  output.append(message, print1, print2);
}
