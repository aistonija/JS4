const password = document.querySelector('input[type="password"]');

password.addEventListener("focus", (event) => {
  event.target.style.background = "lightpink";
});

password.addEventListener("blur", (event) => {
  event.target.style.background = "";
});
