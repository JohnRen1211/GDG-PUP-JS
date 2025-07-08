function checkAge() {
    // Get input value and convert to number
    const ageInput = document.getElementById('ageInput').value;
    const age = Number(ageInput);

    let category;

    // Validate the input and determine the category
    if (isNaN(age) || age < 0) {
        category = "Invalid age. Please enter a valid number.";
    } else if (age <= 12) {
        category = "Child";
    } else if (age <= 19) {
        category = "Teenager";
    } else {
        category = "Adult";
    }

    // Display the result
    document.getElementById('result').textContent = `Category: ${category}`;
}
