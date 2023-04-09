export default function calculate(resultInput) {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  const result = eval(input.value);
  resultInput.classList.remove("error");
  resultInput.value = result;
  console.log(result);
}
