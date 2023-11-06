// DOM
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// подія до інпуту
nameInput.addEventListener("input", function() {
    // поточний інпут
    const inputValue = nameInput.value;

    if (inputValue.trim() === "") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = inputValue;
    }
});