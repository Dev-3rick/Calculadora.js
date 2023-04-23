const input = document.querySelector("#input");
import calculate from "./calculate.js";
export function trataTeclas(ev) {
  console.log(ev);
  const value = ev.currentTarget.dataset.value;
  input.value += value;
}
export function clear() {
  input.value = "";
  input.focus(); //Para focar no input.
}
export function handleTyping(ev) {
  ev.preventDefault();
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
  if (allowdKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
}
