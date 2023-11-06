// We get a link to the form
const loginForm = document.querySelector(".login-form");

// Add a submit action handler to the form
loginForm.addEventListener("submit", function (event) {
  // Зупиняємо стандартну дію відправки форми
  event.preventDefault();

  // Get the values of the form fields
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  // Check if all fields are filled in
  if (!email || !password) {
    alert("Всі поля повинні бути заповнені");
  } else {
    // Create an object with field values
    const formData = {
      email: email,
      password: password,
    };

    // Display an object with data in the console
    console.log(formData);

    // Clear the values of form fields
    loginForm.reset();
  }
});
