import { controls } from "./elements.js";
import * as actions from "./actions.js";


const handleclick = (event) => {
  const action = event.target.dataset.action;
  if (actions[action] == undefined) {
    return;
  }
  actions[action]()
};

export const registerControl = () => {
  controls.addEventListener("click", handleclick);
};
