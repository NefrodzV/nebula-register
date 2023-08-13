console.log("Hello js!");
const emailInput = document.querySelector("#email");
const nextSibling = emailInput.nextElementSibling;
const emailRegExp = /\w{5,}@\w{5,}\.[a-z]{3,}/;

emailInput.addEventListener("input", () => {
  console.log(emailInput.value);

  if (emailInput.value.length === 0) {
    nextSibling.toggleAttribute("active");
  }
  const isValid = emailRegExp.test(emailInput.value);

  if (isValid) {
    if (nextSibling.hasAttribute("active")) {
      nextSibling.toggleAttribute("active");
    }
    emailInput.setCustomValidity("");
    console.log("Email is valid");
    return;
  }
});

emailInput.addEventListener("focus", () => {
  console.log("has focus");
  if (emailInput.value.length > 0 && nextSibling.hasAttribute("active")) {
    emailInput.setCustomValidity(
      "Enter a valid email example: example@gmail.com"
    );
  }
});

emailInput.addEventListener("focusout", () => {
  console.log("lost focus");
  if (emailInput.value.length === 0) return;
  const isValid = emailRegExp.test(emailInput.value.toLowerCase());
  if (isValid) {
    if (nextSibling.hasAttribute("active")) {
      nextSibling.toggleAttribute("active");
    }

    console.log("email is valid and has lost focus");
    emailInput.setCustomValidity("");
    return;
  }

  if (!nextSibling.hasAttribute("active")) {
    nextSibling.toggleAttribute("active");
  }

  nextSibling.textContent = "Enter a valid email example:myemail@gmail.com";
  emailInput.setCustomValidity(
    "Enter a valid email example: example@gmail.com"
  );
});

emailInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    console.log("Enter pressed");
    event.preventDefault();
    emailInput.blur();
  }

  if (event.code === "Space" && emailInput.value.trim().length === 0) {
    console.log("space pressed");
    event.preventDefault();
  }
});
const submitButton = document.querySelector('button[type="submit"]');
console.log(submitButton);
submitButton.addEventListener("click", (event) => {
  // console.log("clicked!");
  // event.preventDefault();
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
