import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";

export let countdown = () => {

  clearTimeout(state.cowntdownID)

  if (!state.isRunning) {
    return;
  }

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    minutes--;
    seconds = 59;
  }
  if (minutes < 0) {
    reset();
    return;
  }

  updateDisplay(minutes, seconds);
  state.cowntdownID = setTimeout(() => countdown(minutes, seconds), 1000);
};

export let updateDisplay = (minutes, seconds) => {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
};
