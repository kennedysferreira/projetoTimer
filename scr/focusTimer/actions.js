import { isRunningAndMusicOn } from "./elements.js";
import state from "./state.js";

export let toggleRunning = () => {
  state.isRunning = isRunningAndMusicOn.classList.toggle("running");
};
export let set = () => {
  console.log("horario");
};
export let reset = () => {
  state.isRunning = false
  isRunningAndMusicOn.classList.remove("running");
};
export let toggleMusic = () => {
  state.isMute = isRunningAndMusicOn.classList.toggle("music-on");
};
