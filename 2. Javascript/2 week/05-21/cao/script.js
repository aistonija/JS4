const form = document.querySelector("form");
let letterCont = document.querySelector(".letter");
// to clear the container

form.addEventListener("submit", (e) => {
  e.preventDefault();
  letterCont.innerHTML = "";
  const input = document.querySelector('input[type="number"]');
  const num = Number(input.value);

  // only when odd numbers
  if (num % 2 === 1) {
    //   we start the cycle
    for (let i = 0; i < num; i++) {
      // create new element on each cycle
      let div = document.createElement("div");
      div.innerHTML = "I";

      if (i === 0 || i === num - 1) {
        for (let j = 1; j < num; j++) {
          div.innerHTML += " <span>I</span>";
        }
      }

      letterCont.append(div);
    }
  } else {
    alert("klaida");
  }
});
