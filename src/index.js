import "./style.css";
import string from "./res/string";
import Validator from "./utils/Validator";

const emailInput = document.querySelector("#email");
const emailSibling = emailInput.nextElementSibling;
// const emailRegExp = /\w{5,}@\w{5,}\.[Aa-Zz]{3,}/;

const zipcodeInput = document.querySelector("#zipcode");
const zipCodeSibling = zipcodeInput.nextElementSibling;
const zipcodeRegExp = /[0-9]{5}/;

const passwordInput = document.querySelector("#password");
const passwordSibling = passwordInput.nextElementSibling;
const passwordRegexExp = /\w{8,}/;

const confirmPasswordInput = document.querySelector("#confirm-password");
const confirmPasswordSibling = confirmPasswordInput.nextElementSibling;

const countrySelect = document.querySelector("#country");
const countrySelectSibling = countrySelect.nextElementSibling;

emailInput.addEventListener("input", () => {
  if (Validator.isEmpty(emailInput.value) && isActive(emailSibling)) {
    toggleActive(emailSibling);
  }

  if (Validator.isValid(emailInput.value, Validator.emailRegExp)) {
    if (isActive(emailSibling)) {
      toggleActive(emailSibling);
    }
    fieldIsValid(emailInput);
    return;
  }
});

emailInput.addEventListener("focusout", () => {
  if (Validator.isEmpty(emailInput.value)) return;

  if (Validator.isValid(emailInput.value, Validator.emailRegExp)) {
    if (isActive(emailSibling)) {
      toggleActive(emailSibling);
    }

    fieldIsValid(emailInput);
    return;
  }

  if (!isActive(emailSibling)) {
    toggleActive(emailSibling);
  }
  emailSibling.textContent = string.EMAIL_ERROR_STRING;
  emailInput.setCustomValidity(string.EMAIL_ERROR_STRING);
});

emailInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    emailInput.blur();
  }

  if (event.code === "Space" && Validator.isEmpty(emailInput.value)) {
    event.preventDefault();
  }
});

zipcodeInput.addEventListener("input", () => {
  if (
    zipcodeInput.value.length === 0 &&
    zipCodeSibling.hasAttribute("active")
  ) {
    zipCodeSibling.toggleAttribute("active");
  }

  const isValid = zipcodeRegExp.test(zipcodeInput.value);
  if (isValid) {
    if (zipCodeSibling.hasAttribute("active")) {
      zipCodeSibling.toggleAttribute("active");
    }
    zipcodeInput.classList.remove("fieldEmptyError");
    zipcodeInput.setCustomValidity("");
    console.log("Zipcode is valid");
    return;
  }
});

zipcodeInput.addEventListener("focusout", () => {
  if (zipcodeInput.value.length === 0) return;

  const isValid = zipcodeRegExp.test(zipcodeInput.value);
  if (isValid) {
    if (zipCodeSibling.hasAttribute("active")) {
      zipCodeSibling.toggleAttribute("active");
    }

    console.log("zipcode is valid and has lost focus");
    zipcodeInput.setCustomValidity("");
    return;
  }

  if (!zipCodeSibling.hasAttribute("active")) {
    zipCodeSibling.toggleAttribute("active");
  }

  zipCodeSibling.textContent = string.ZIPCODE_ERROR_STRING;
  zipcodeInput.setCustomValidity(string.ZIPCODE_ERROR_STRING);
});

zipcodeInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    // console.log("Enter pressed");
    event.preventDefault();
    zipcodeInput.blur();
  }

  if (event.code === "Space" && emailInput.value.trim().length === 0) {
    // console.log("space pressed");
    event.preventDefault();
  }
});

passwordInput.addEventListener("input", () => {
  if (
    passwordInput.value.length === 0 &&
    passwordSibling.hasAttribute("active")
  ) {
    passwordSibling.toggleAttribute("active");
  }

  const isValid = passwordRegexExp.test(passwordInput.value);
  if (isValid) {
    if (passwordSibling.hasAttribute("active")) {
      passwordSibling.toggleAttribute("active");
    }
    passwordInput.classList.remove("fieldEmptyError");
    passwordInput.setCustomValidity("");
    console.log("Passowrd is valid");
    return;
  }
});

passwordInput.addEventListener("focusout", () => {
  if (passwordInput.value.length === 0) return;

  const isValid = passwordRegexExp.test(passwordInput.value);
  if (isValid) {
    if (passwordSibling.hasAttribute("active")) {
      passwordSibling.toggleAttribute("active");
    }

    console.log("passsword is valid and has lost focus");
    passwordInput.setCustomValidity("");
    return;
  }

  if (!passwordSibling.hasAttribute("active")) {
    passwordSibling.toggleAttribute("active");
  }

  passwordSibling.textContent = string.PASSWORD_LENGTH_ERROR_STRING;
  passwordInput.setCustomValidity(string.PASSWORD_LENGTH_ERROR_STRING);
});

passwordInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    // console.log("Enter pressed");
    event.preventDefault();
    passwordInput.blur();
  }

  if (event.code === "Space" && passwordInput.value.trim().length === 0) {
    // console.log("space pressed");
    event.preventDefault();
  }
});

confirmPasswordInput.addEventListener("input", () => {
  if (
    confirmPasswordInput.value.length === 0 &&
    confirmPasswordSibling.hasAttribute("active")
  ) {
    confirmPasswordSibling.toggleAttribute("active");
  }

  const isValid = passwordRegexExp.test(confirmPasswordInput.value);
  if (isValid) {
    if (confirmPasswordSibling.hasAttribute("active")) {
      confirmPasswordSibling.toggleAttribute("active");
    }
    emailInput.classList.remove("fieldEmptyError");
    confirmPasswordInput.setCustomValidity("");
    console.log("Confirm password is valid is valid");
    return;
  }
});

confirmPasswordInput.addEventListener("focusout", () => {
  if (confirmPasswordInput.value.length === 0) return;

  const isValid =
    confirmPasswordInput.value.trim() === passwordInput.value.trim();
  if (isValid) {
    if (confirmPasswordSibling.hasAttribute("active")) {
      confirmPasswordSibling.toggleAttribute("active");
    }

    confirmPasswordInput.classList.remove("fieldEmptyError");
    console.log("confirm password is valid and has lost focus");
    confirmPasswordInput.setCustomValidity("");
    return;
  }

  if (!confirmPasswordSibling.hasAttribute("active")) {
    confirmPasswordSibling.toggleAttribute("active");
  }

  confirmPasswordSibling.textContent = string.CONFIRM_EQUALITY_ERROR_STRING;
  confirmPasswordInput.setCustomValidity(string.CONFIRM_EQUALITY_ERROR_STRING);
});

confirmPasswordInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    // console.log("Enter pressed");
    event.preventDefault();
    confirmPasswordInput.blur();
  }

  if (event.code === "Space" && passwordInput.value.trim().length === 0) {
    // console.log("space pressed");
    event.preventDefault();
  }
});

countrySelect.addEventListener("input", () => {
  const country = countrySelect.value.trim();
  countrySelect.className = "";
  if (country.length != 0) {
    if (countrySelectSibling.hasAttribute("active")) {
      countrySelectSibling.toggleAttribute("active");
    }
    emailInput.classList.remove("fieldEmptyError");
    countrySelect.setCustomValidity("");
    console.log("There is a selection disable error");
  }
});

countrySelect.addEventListener("focusout", () => {
  const country = countrySelect.value.trim();
  console.log("validity" + countrySelect.checkValidity());

  if (country.length != 0) {
    if (countrySelectSibling.hasAttribute("active")) {
      countrySelectSibling.toggleAttribute("active");
    }

    countrySelect.setCustomValidity("");
    console.log("There is a selection disable error");
    countrySelect.className = "";

    return;
  }
  if (!countrySelectSibling.hasAttribute("active")) {
    countrySelectSibling.toggleAttribute("active");
  }

  countrySelectSibling.textContent = string.NO_SELECTION_ERROR;
  countrySelect.setCustomValidity(string.NO_SELECTION_ERROR);
  countrySelect.className = "fieldEmptyError";
  console.log("selection lost focus");
});

const submitButton = document.querySelector('button[type="submit"]');
console.log(submitButton);
submitButton.addEventListener("click", (event) => {
  addRipple(event);
  event.preventDefault();
  blur();
  console.log("Submit button clicked");

  const inputToValidate = [
    emailInput,
    zipcodeInput,
    countrySelect,
    passwordInput,
    confirmPasswordInput,
  ];

  // For loop to check if the are empty
  for (let i = 0; i < inputToValidate.length; i++) {
    console.log("iteration " + i);
    let input = inputToValidate[i];
    let fieldIsValid = !input.validity.valueMissing;
    if (fieldIsValid) {
      console.log("Field is valid" + input.type);
      continue;
    }
    console.log("field is not valid" + input.type);
    showError(input);
  }

  const emailIsValid = emailInput.checkValidity();
  const zipCodeisValid = zipcodeInput.checkValidity();
  const countryIsValid = countrySelect.checkValidity();
  const passwordIsValid = passwordInput.checkValidity();
  const confirmPasswordIsValid = confirmPasswordInput.checkValidity();

  if (
    !emailIsValid ||
    !zipCodeisValid ||
    !countryIsValid ||
    !passwordIsValid ||
    !confirmPasswordIsValid
  ) {
    console.log("There are invalid fields not submitting");
    return;
  }

  alert(string.VALIDATION_ACCEPTED_STRING);
});

function addRipple(event) {
  const parent = event.target;

  const span = document.createElement("span");

  const max = Math.max(parent.clientWidth, parent.clientHeight);
  const radius = max / 2;
  span.style.width = max + "px";
  span.style.height = max + "px";

  span.style.top = `${event.clientY - parent.offsetTop - radius}px`;
  span.style.left = `${event.clientX - parent.offsetLeft - radius}px`;
  span.classList.add("ripple");

  parent.appendChild(span);

  setTimeout(() => {
    parent.removeChild(span);
  }, 1000);
}

function showError(input) {
  input.className = "fieldEmptyError";
  const nextElementSibling = input.nextElementSibling;
  if (!nextElementSibling.hasAttribute("active")) {
    nextElementSibling.toggleAttribute("active");
  }

  nextElementSibling.textContent = string.EMPTY_FIELD_ERROR_STRING;
}

function isActive(element) {
  return element.hasAttribute("active");
}

function toggleActive(element) {
  element.toggleAttribute("active");
}

function fieldIsValid(input) {
  if (input.classList.contains("fieldEmptyError")) {
    input.classList.remove("fieldEmptyError");
  }
  input.setCustomValidity("");
}
