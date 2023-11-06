// Отримуємо посилання на форму
const loginForm = document.querySelector('.login-form');

// Додаємо обробник події submit до форми
loginForm.addEventListener('submit', function(event) {
  // Зупиняємо стандартну дію відправки форми
  event.preventDefault();

  // Отримуємо значення полів форми
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  // Перевіряємо, чи всі поля заповнені
  if (!email || !password) {
    alert('Всі поля повинні бути заповнені');
  } else {
    // Створюємо об'єкт зі значеннями полів
    const formData = {
      email: email,
      password: password
    };

    // Виводимо об'єкт з даними в консоль
    console.log(formData);

    // Очищаємо значення полів форми
    loginForm.reset();
  }
});