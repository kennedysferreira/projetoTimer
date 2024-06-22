import * as el from "./elements.js";
import * as actions from "./actions.js";

const handleclick = (event) => {
  const action = event.target.dataset.action;
  if (actions[action] == undefined) {
    return;
  }
  actions[action]();
};

const handleFocus = () => {
  el.minutes.textContent = "";
  el.seconds.textContent = "";
};

const blockNaNAndMaxLength = (event) => {
  const teclasPermitidas = [
    "Backspace",
    "ArrowLeft",
    "ArrowRight",
    "Delete",
    "Tab",
  ];

  if (!teclasPermitidas.includes(event.key) && !/\d/.test(event.key)) {
    event.preventDefault();
  }
};

export const registerControl = () => {
  el.controls.addEventListener("click", handleclick);
};

export const setMinutes = () => {
  el.minutes.addEventListener("focus", handleFocus);
  el.minutes.addEventListener("keydown", blockNaNAndMaxLength);
  el.seconds.addEventListener("focus", handleFocus);
  el.seconds.addEventListener("keydown", blockNaNAndMaxLength);
};
