function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо елементи DOM за їхніми класами
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// Додаємо обробник події для кліку на кнопку
changeColorButton.addEventListener('click', function () {
  // Генеруємо випадковий колір
  const randomColor = getRandomHexColor();

  // Змінюємо фон body
  document.body.style.backgroundColor = randomColor;

  // Виводимо значення кольору в span.color
  colorSpan.textContent = randomColor;
});