// Get DOM elements
const counterText = document.querySelector("#counter-text");
const addButton = document.querySelector("#button-add");
const subtractButton = document.querySelector("#button-subtract");

// Initialize counter
let counterVal = 0;

// Add button logic
addButton.addEventListener("click", () => {
  counterVal++;
  counterText.textContent = counterVal;
});

// Subtract button logic
subtractButton.addEventListener("click", () => {
  if (counterVal > 0) {
    counterVal--;
    counterText.textContent = counterVal;
  }
});
