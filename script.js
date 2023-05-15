// Select all relevant elements
const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Password2 = document.getElementById("password2");
const showPassword = document.getElementById("show-password");
const revealPassword = document.getElementById("reveal-password");
const output = document.getElementById("output");

showPassword.addEventListener("click", (e) => {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  showPassword.classList.toggle("fa-eye");
});

revealPassword.addEventListener("click", (e) => {
  const type =
    Password2.getAttribute("type") === "password" ? "text" : "password";
  Password2.setAttribute("type", type);
  revealPassword.classList.toggle("fa-eye");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.textContent = message;
  errorDisplay.style.color = "#e74c3c";
  inputControl.classList.add("error");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.textContent = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regEmail.test(String(email).toLocaleLowerCase());
};

const validateInputs = () => {
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = Password2.value.trim();

  if (userNameValue === "") {
    setError(userName, "Username is required");
  } else {
    setSuccess(userName);
  }

  //Email
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Enter a valid email address");
  } else {
    setSuccess(email);
  }

  //Password
  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 6) {
    setError(password, "Your password must be at least 6 characters.");
  } else {
    setSuccess(password);
  }

  //Confirm-Password
  if (password2Value === "") {
    setError(Password2, "Password is required");
  } else if (password2Value !== passwordValue) {
    setError(Password2, "Passwords do not match");
  } else {
    setSuccess(Password2);
  }
};
