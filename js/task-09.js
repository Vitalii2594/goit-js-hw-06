function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Get DOM elements by their classes
const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

// Add an event handler for a button click
changeColorButton.addEventListener("click", function () {
  // Generate a random colour
  const randomColor = getRandomHexColor();

  // Change the body background
  document.body.style.backgroundColor = randomColor;

  // Print the colour value in span.colour
  colorSpan.textContent = randomColor;
});
