const gameButton = document.getElementById("game-button");

let input;
let button;

gameButton.addEventListener("click", () => {
  // prevent creating multiple times
  if (input && button) return;

  input = document.createElement("input");
  input.type = "number";
  input.placeholder = "Enter a number";
  input.id = "guess-input";

  button = document.createElement("button");
  button.innerText = "Send";
  button.id = "send-button";

  document.body.appendChild(input);
  document.body.appendChild(button);
});

// ✅ now BOTH DOM elements are accessible here
document.addEventListener("click", (e) => {
  if (e.target.id === "send-button") {
    const num = Number(input.value);

    if (num <= 18) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
    }
  }
});