const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(event.target);
  //   console.log(event.target[0]);
  //   console.log(event.target[0].value);
  const fName = document.querySelector(".firstName");
  console.log(fName.value);
  const h1 = document.querySelector("h1");
  h1.textContent = fName.value;
});
