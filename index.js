console.log("Hello js!");
const emailInput = document.querySelector("#email");

const emailRegExp = /\w{5,}@\w{5,}\.[a-z]{3,}/;

// emailInput.setAttribute("pattern", emailRegExp);
emailInput.addEventListener("input", () => {
  console.log(emailInput.value);

  const isValid =
    emailInput.value.length === 0 || emailRegExp.test(emailInput.value);

  if (isValid) {
    console.log("Email is valid");
    return;
  }

  console.log("email is invalid");
});

emailInput.addEventListener("focusout", () => {
  console.log("lost focus");
  const isValid =
    emailInput.value.length === 0 || emailRegExp.test(emailInput.value);
  if (isValid) {
    console.log("email is valid and has lost focus");
    emailInput.setAttribute("valid", "true");
  }
});
const submitButton = document.querySelector('button[type="submit"]');
console.log(submitButton);
submitButton.addEventListener("click", (event) => {
  console.log("clicked!");
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
  // Check if an element with ripple exists and remove it

  parent.appendChild(span);

  setTimeout(() => {
    parent.removeChild(span);
  }, 1000);
}

function calculatePosition(target) {}
