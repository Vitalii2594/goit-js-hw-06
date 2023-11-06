// DOM
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// to imput
nameInput.addEventListener("input", function () {
  // current input
  const inputValue = nameInput.value;

  if (inputValue.trim() === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
});
