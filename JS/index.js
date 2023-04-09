import { templete } from "./funtionTemplete.js";
import calculate from "./calculate.js";
import copiador from "./copiarResultado.js";
import { trataTeclas, clear, handleTyping } from "./tratateclas.js";

const input = document.getElementById("input");
const resultInput = document.getElementById("result");

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", trataTeclas);
});

document.getElementById("clear").addEventListener("click", clear);

input.addEventListener("keydown", handleTyping);

document.getElementById("equal").addEventListener("click", () => calculate());

document
  .getElementById("copyToClipboard")
  .addEventListener("click", (event) => {
    copiador(event, resultInput);
  });
document
  .getElementById("themeSwitcher")
  .addEventListener("click", () => templete());
