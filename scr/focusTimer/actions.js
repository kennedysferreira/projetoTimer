import * as el from "./elements.js";
import state from "./state.js";
import * as timer from "./timer.js";


export let toggleRunning = () => {
  state.isRunning = el.isRunningAndMusicOn.classList.toggle("running");
  timer.countdown()
};
export let set = () => {
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
};
export let reset = () => {
  state.isRunning = false
  el.isRunningAndMusicOn.classList.remove("running");
  timer.updateDisplay()
};
export let toggleMusic = () => {
  state.isMute = el.isRunningAndMusicOn.classList.toggle("music-on");
};
