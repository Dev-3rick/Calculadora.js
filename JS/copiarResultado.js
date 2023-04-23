export default (event) => {
  const button = event.currentTarget;
  if (button.innerText === "Copy") {
    button.innerText = "Copied!";
    button.classList.add("success");
    navigator.clipboard.writeText(document.getElementById("result").value);
  } else {
    button.innerText = "Copy";
    button.classList.remove("success");
  }
};
