const container = document.querySelector(".container");

let inputFirstName = "";
let inputLastName = "";

const clearContainer = function () {
  container.innerHTML = "";
};

const printStep1 = function () {
  const form = document.createElement("form");

  const textInput = document.createElement("input");

  textInput.type = "text";
  textInput.placeholder = "Tavo pirmas vardas";

  const errorContainer = document.createElement("div");
  const submitButton = document.createElement("input");

  submitButton.type = "submit";
  submitButton.value = "Sekantis žingsnis";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    errorContainer.textContent = "";
    if (textInput.value.length <= 0) {
      errorContainer.textContent = "Butina ivesti pirma varda";
      return;
    }

    inputFirstName = textInput.value;

    printStep2();
  });

  clearContainer();

  form.append(textInput, errorContainer, submitButton);
  container.append(form);
};

const printStep2 = function () {
  const textInput = document.createElement("input");

  textInput.type = "text";
  textInput.placeholder = "Tavo antras vardas";

  const errorContainer = document.createElement("div");
  const submitButton = document.createElement("input");

  submitButton.type = "button";
  submitButton.value = "Baigiau";
  submitButton.addEventListener("click", () => {
    errorContainer.textContent = "";
    if (textInput.value.length <= 0) {
      errorContainer.textContent = "Butina ivesti antra varda";
      return;
    }

    inputLastName = textInput.value;

    printStep3();
  });

  clearContainer();
  container.append(textInput, errorContainer, submitButton);
};

const printStep3 = function () {
  const resultFirstName = document.createElement("div");
  const resultLastName = document.createElement("div");

  resultFirstName.textContent = inputFirstName;
  resultLastName.textContent = inputLastName;

  clearContainer();
  container.append(resultFirstName, resultLastName);
};

printStep1();
