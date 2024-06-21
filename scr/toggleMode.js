let darkMode = true;
const buttonToogle = document.getElementById("toggle-mode");
const ligthMode = document.querySelector("html");

let handleToogle = (event) => {
  const mode = darkMode ? "ligth" : "dark";
  let message = `${mode} mode ativado`;
  event.currentTarget.querySelector("span").textContent = message;
  darkMode = !darkMode;
  activeLigthMode();
};

let activeLigthMode = () => {
  ligthMode.classList.toggle("ligth");
};

buttonToogle.addEventListener("click", handleToogle);
