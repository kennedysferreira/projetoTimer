import * as el from "./elements.js";
import * as actions from "./actions.js";
import state from "./state.js";
import { updateDisplay } from "./timer.js";

const handleclick = (event) => {
  const action = event.target.dataset.action; 
  if (actions[action] == undefined) {
    return;
  }
  actions[action]();
};

const handleFocus = () => {
  el.minutes.textContent = "";
};

const blockNaNAndMaxLength = (event) => {
  const keyPermit = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"];

  if (!keyPermit.includes(event.key) && !/\d/.test(event.key)) {
    event.preventDefault();
  }

  if (!keyPermit.includes(event.key) && event.target.innerText.length >= 2) {
    event.preventDefault();
  }
};

const maxTime = () => {
  let time = Number(el.minutes.textContent);
  time = time >= 60 ? 60 : time;
  state.minutes = time;
  state.seconds = 0;

  updateDisplay();
  el.minutes.setAttribute("contenteditable", false);
};

export const registerControl = () => {
  el.controls.addEventListener("click", handleclick);
};

export const setMinutes = () => {
  el.minutes.addEventListener("focus", handleFocus);
  el.minutes.addEventListener("keydown", blockNaNAndMaxLength);
  el.minutes.addEventListener("blur", maxTime);
};
