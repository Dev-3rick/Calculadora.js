import { templete } from "./funtionTemplete.js";
import calculate from "./calculate.js";
import copiador from "./copiarResultado.js";


const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

const allowdKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

document.querySelectorAll(".charKey").forEach((charKeyBtn) => {
  charKeyBtn.addEventListener("click", () => {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

document.getElementById("clear").addEventListener("click", () => {
  input.value = "";
  input.focus(); //Para focar no input.
});

input.addEventListener("keydown", (ev) => {
  ev.preventDefault();
  if (allowdKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate(resultInput);
  }
});

document
  .getElementById("equal")
  .addEventListener("click", () => calculate(resultInput));

document
  .getElementById("copyToClipboard")
  .addEventListener("click", (event) => {
    copiador(event, resultInput);
  });
document
  .getElementById("themeSwitcher")
  .addEventListener("click", () => templete(main, root));
