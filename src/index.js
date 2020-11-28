import "./sass/main.scss";

import { initScrollListener } from "./js/init-scroll-listener";
import { sendEmail } from "./js/send-email";
import { validateEmail } from "./js/validate-email";

import {
  FORM_CLASS,
  FORM_INPUT_CLASS,
  INPUT_VALIDATION_ERROR_CLASS,
} from "./js/constants";

function subscribeNotify() {
  const notificationEl = document.querySelector("#subscribe-notification-js");

  notificationEl.style.opacity = 1;

  setTimeout(() => {
    notificationEl.style.opacity = 0;
  }, 2000);
}

function onFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const input = form.querySelector(`.${FORM_INPUT_CLASS}`);

  if (validateEmail(input.value)) {
    sendEmail(input.value).then(subscribeNotify);
  } else {
    input.classList.add(INPUT_VALIDATION_ERROR_CLASS);
  }
}

function main() {
  const forms = document.querySelectorAll(`.${FORM_CLASS}`);
  Array.from(forms).forEach((form) => {
    form.addEventListener("submit", onFormSubmit);
  });
  window.addEventListener("scroll", initScrollListener());

  document.addEventListener("input", (event) => {
    const input = event.target;
    if (input.classList.contains(INPUT_VALIDATION_ERROR_CLASS)) {
      input.classList.remove(INPUT_VALIDATION_ERROR_CLASS);
    }
  });
}

window.addEventListener("DOMContentLoaded", main);
