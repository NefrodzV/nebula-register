import "./style.css";
import string from "./res/string";
import Validator from "./utils/Validator";

const emailInput = document.querySelector("#email");
const emailSibling = emailInput.nextElementSibling;
// const emailRegExp = /\w{5,}@\w{5,}\.[Aa-Zz]{3,}/;

const zipcodeInput = document.querySelector("#zipcode");
const zipCodeSibling = zipcodeInput.nextElementSibling;
// const zipcodeRegExp = /[0-9]{5}/;

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
    setFieldValid(emailInput);
    return;
  }
});

emailInput.addEventListener("focusout", () => {
  if (Validator.isEmpty(emailInput.value)) return;
  if (Validator.isValid(emailInput.value, Validator.emailRegExp)) {
    if (isActive(emailSibling)) {
      toggleActive(emailSibling);
    }
    setFieldValid(emailInput);
    return;
  }
  if (!isActive(emailSibling)) {
    toggleActive(emailSibling);
  }
  setFieldInvalid(emailInput, string.EMAIL_ERROR_STRING);
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
  if (Validator.isEmpty(zipcodeInput.value) && isActive(zipCodeSibling)) {
    toggleActive(zipCodeSibling);
  }
  if (Validator.isValid(zipcodeInput.value, Validator.zipcodeRegExp)) {
    if (isActive(zipCodeSibling)) {
      toggleActive(zipCodeSibling);
    }
    setFieldValid(zipcodeInput);
    return;
  }
});

zipcodeInput.addEventListener("focusout", () => {
  if (Validator.isEmpty(zipcodeInput.value)) return;

  if (Validator.isValid(zipcodeInput.value, Validator.zipcodeRegExp)) {
    if (isActive(zipCodeSibling)) {
      toggleActive(zipCodeSibling);
    }
    setFieldValid(zipcodeInput);
    return;
  }
  if (!isActive(zipCodeSibling)) {
    toggleActive(zipCodeSibling);
  }
  setFieldInvalid(zipcodeInput, string.ZIPCODE_ERROR_STRING);
});

zipcodeInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    zipcodeInput.blur();
  }
  if (event.code === "Space" && emailInput.value.trim().length === 0) {
    // console.log("space pressed");
    event.preventDefault();
  }
});

passwordInput.addEventListener("input", () => {
  if (Validator.isEmpty(passwordInput.value) && isActive(passwordSibling)) {
    toggleActive(passwordSibling);
  }
  if (Validator.isValid(passwordInput.value, Validator.passwordRegExp)) {
    if (isActive(passwordSibling)) {
      toggleActive(passwordSibling);
    }
    setFieldValid(passwordInput);
    return;
  }
});

passwordInput.addEventListener("focusout", () => {
  if (Validator.isEmpty(passwordInput.value)) return;
  if (Validator.isValid(passwordInput.value, Validator.passwordRegExp)) {
    if (isActive(passwordSibling)) {
      toggleActive(passwordSibling);
    }

    setFieldValid(passwordInput);
    return;
  }
  if (!isActive(passwordSibling)) {
    toggleActive(passwordSibling);
  }
  setFieldInvalid(passwordInput, string.PASSWORD_LENGTH_ERROR_STRING);
});

passwordInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    passwordInput.blur();
  }
  if (event.code === "Space" && passwordInput.value.trim().length === 0) {
    event.preventDefault();
  }
});

confirmPasswordInput.addEventListener("input", () => {
  if (
    Validator.isEmpty(confirmPasswordInput.value) &&
    isActive(confirmPasswordSibling)
  ) {
    toggleActive(confirmPasswordSibling);
  }
  if (Validator.isValid(passwordInput.value, Validator.passwordRegExp)) {
    if (isActive(confirmPasswordSibling)) {
      toggleActive(confirmPasswordSibling);
    }
    setFieldValid(confirmPasswordInput);
    return;
  }
});

confirmPasswordInput.addEventListener("focusout", () => {
  if (Validator.isEmpty(confirmPasswordInput.value)) return;
  if (Validator.areEqual(confirmPasswordInput.value, passwordInput.value)) {
    if (isActive(passwordSibling)) {
      toggleActive(passwordSibling);
    }
    setFieldValid(confirmPasswordInput);
    return;
  }
  if (!isActive(confirmPasswordSibling)) {
    toggleActive(confirmPasswordSibling);
  }
  setFieldInvalid(confirmPasswordInput, string.CONFIRM_EQUALITY_ERROR_STRING);
});
confirmPasswordInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    confirmPasswordInput.blur();
  }
  if (event.code === "Space" && Validator.isEmpty(confirmPasswordInput.value)) {
    event.preventDefault();
  }
});

countrySelect.addEventListener("input", () => {
  const country = countrySelect.value;
  if (!Validator.isEmpty(country)) {
    if (isActive(countrySelectSibling)) {
      toggleActive(countrySelectSibling);
    }
    setFieldValid(countrySelect);
  }
});

countrySelect.addEventListener("focusout", () => {
  const country = countrySelect.value.trim();
  console.log("validity" + countrySelect.checkValidity());

  if (!Validator.isEmpty(country)) {
    if (isActive(countrySelectSibling)) {
      toggleActive(countrySelectSibling);
    }
    setFieldValid(countrySelect);
    return;
  }
  if (!isActive(countrySelectSibling)) {
    toggleActive(countrySelectSibling);
  }
  setFieldInvalid(countrySelect, string.NO_SELECTION_ERROR_STRING);
  countrySelect.className = "fieldEmptyError";
});

const submitButton = document.querySelector('button[type="submit"]');
console.log(submitButton);
submitButton.addEventListener("click", (event) => {
  addRipple(event);
  event.preventDefault();
  blur();

  const inputsToValidate = [
    emailInput,
    zipcodeInput,
    countrySelect,
    passwordInput,
    confirmPasswordInput,
  ];

  // For loop to check if the are empty
  for (let i = 0; i < inputsToValidate.length; i++) {
    console.log("iteration " + i);
    let input = inputsToValidate[i];
    let fieldIsValid = !input.validity.valueMissing;
    // If is true go to the next loop
    if (fieldIsValid) {
      continue;
    }
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

function setFieldValid(input) {
  if (input.classList.contains("fieldEmptyError")) {
    input.classList.remove("fieldEmptyError");
  }
  input.setCustomValidity("");
}

function setFieldInvalid(input, errorMsg) {
  input.nextElementSibling.textContent = errorMsg;
  input.setCustomValidity(errorMsg);
}
