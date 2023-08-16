console.log("Hello js!");
const emailInput = document.querySelector("#email");
const emailSibling = emailInput.nextElementSibling;
const emailRegExp = /\w{5,}@\w{5,}\.[a-z]{3,}/;
const EMAIL_ERROR_STRING = "Enter a valid email example: example@gmail.com";

const zipcodeInput = document.querySelector("#zipcode");
const zipCodeSibling = zipcodeInput.nextElementSibling;
const ZIPCODE_ERROR_STRING = "Zipcode must be 5 numbers";
const zipcodeRegExp = /[0-9]{5}/;

const passwordInput = document.querySelector("#password");
const passwordSibling = passwordInput.nextElementSibling;
const passwordRegexExp = /\w{8,}/;
const PASSWORD_LENGTH_ERROR_STRING = "Must be minimum 8 caracters";

const confirmPasswordInput = document.querySelector("#confirm-password");
const confirmPasswordSibling = confirmPasswordInput.nextElementSibling;
const CONFIRM_EQUALITY_ERROR_STRING =
  "Confirm password is not equal to password";

const countrySelect = document.querySelector("#country");
const countrySelectSibling = countrySelect.nextElementSibling;
const NO_SELECTION_ERROR = "Make a selection";

emailInput.addEventListener("input", () => {
  console.log(emailInput.value);

  if (emailInput.value.length === 0 && emailSibling.hasAttribute("active")) {
    emailSibling.toggleAttribute("active");
  }
  const isValid = emailRegExp.test(emailInput.value);

  if (isValid) {
    if (emailSibling.hasAttribute("active")) {
      emailSibling.toggleAttribute("active");
    }
    emailInput.setCustomValidity("");
    console.log("Email is valid");
    return;
  }
});

emailInput.addEventListener("focusout", () => {
  console.log("lost focus");
  if (emailInput.value.length === 0) return;
  const isValid = emailRegExp.test(emailInput.value.toLowerCase());
  if (isValid) {
    if (emailSibling.hasAttribute("active")) {
      emailSibling.toggleAttribute("active");
    }

    console.log("email is valid and has lost focus");
    emailInput.setCustomValidity("");
    return;
  }

  if (!emailSibling.hasAttribute("active")) {
    emailSibling.toggleAttribute("active");
  }

  emailSibling.textContent = EMAIL_ERROR_STRING;
  emailInput.setCustomValidity(EMAIL_ERROR_STRING);
});

emailInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    // console.log("Enter pressed");
    event.preventDefault();
    emailInput.blur();
  }

  if (event.code === "Space" && emailInput.value.trim().length === 0) {
    // console.log("space pressed");
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

  zipCodeSibling.textContent = ZIPCODE_ERROR_STRING;
  zipcodeInput.setCustomValidity(ZIPCODE_ERROR_STRING);
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

  passwordSibling.textContent = PASSWORD_LENGTH_ERROR_STRING;
  passwordInput.setCustomValidity(PASSWORD_LENGTH_ERROR_STRING);
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

    console.log("confirm password is valid and has lost focus");
    confirmPasswordInput.setCustomValidity("");
    return;
  }

  if (!confirmPasswordSibling.hasAttribute("active")) {
    confirmPasswordSibling.toggleAttribute("active");
  }

  confirmPasswordSibling.textContent = CONFIRM_EQUALITY_ERROR_STRING;
  confirmPasswordInput.setCustomValidity(CONFIRM_EQUALITY_ERROR_STRING);
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
  if (country.length != 0) {
    if (countrySelectSibling.hasAttribute("active")) {
      countrySelectSibling.toggleAttribute("active");
    }

    countrySelect.setCustomValidity("");
    console.log("There is a selection disable error");
    countrySelect.className = "";
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

  countrySelectSibling.textContent = NO_SELECTION_ERROR;
  countrySelect.setCustomValidity(NO_SELECTION_ERROR);
  countrySelect.className = "fieldEmptyError";
  console.log("selection lost focus");
});

const submitButton = document.querySelector('button[type="submit"]');
console.log(submitButton);
submitButton.addEventListener("click", (event) => {
  // console.log("clicked!");
  event.preventDefault();
  addRipple(event);
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
