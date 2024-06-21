import state from "./state.js";
import * as events from './events.js'

export let start = (minutes, seconds) => {
  state.minutes = minutes;
  state.seconds = seconds;

  events.registerControl()
};
