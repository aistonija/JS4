const form = document.querySelector("form");
const card = document.querySelector(".card");

form.addEventListener("submit", printCard);

function printCard(event) {
  event.preventDefault();
  console.log(event);
  const imgUrl = event.target.elements.imgUrl.value;
  const fName = event.target.elements.fName.value;
  const age = event.target.elements.age.value;
  const gender = event.target.elements.gender.value;
  const text = event.target.elements.aboutMeMessage.value;
  const selection = event.target.elements.relationship.value;

  document.querySelector(".myPhoto").src = imgUrl;
  document.querySelector(".myName").textContent = fName;
  document.querySelector(".myAge").textContent = age;
  document.querySelector(".myGender").textContent = gender;
  document.querySelector(".aboutMe").textContent = text;
  document.querySelector(".myStatus").textContent = switchResult(
    Number(selection)
  );
  card.style.display = "block";
}

function switchResult(options) {
  let option = "";

  switch (options) {
    case 1: {
      option = "Single and ready to Mingle";
      break;
    }
    case 2: {
      option = "Happily Married";
      break;
    }
    case 3: {
      option = "I'd rather not say";
      break;
    }
    default:
      option = "Please choose one of the following";
  }

  return option;
}
