// Step 1: Select the button by its ID
const colorButton = document.getElementById("colorButton");

// Step 2: Add click event listener to the button
colorButton.addEventListener("click", function () {
  // Step 3: Generate a random hex color
  const randomColor = getRandomColor();

  // Step 4: Change the background color of the body
  document.body.style.backgroundColor = randomColor;
});

// Helper function to generate a random hex color
function getRandomColor() {
  // Generate a random number between 0 and 16777215 (0xFFFFFF)
  const randomNum = Math.floor(Math.random() * 16777215);
  const hexColor = `#${randomNum.toString(16).padStart(6, "0")}`;
  return hexColor;
}
