document.getElementById("main-heading").style.textAlign = "center";

const box = document.getElementById("box");

box.innerHTML = "<p>Ola Ola</p>";
box.textContent = "<p>Ola Ola</p>";
box.style.background = "hotpink";

// skirtas vienam elementui paimti
// bet koki elementa (tag, class, id, attribute)
const newBox = document.querySelector(".box");
newBox.style.height = "200px";
newBox.style.width = "200px";
newBox.style.border = "2px solid green";
