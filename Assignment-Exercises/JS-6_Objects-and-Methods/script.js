// Step 1: Create a Car Object
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021
};

// Step 2: Create a Function to Describe the Car
function getDescription(carObject) {
  return `This car is a ${carObject.year} ${carObject.make} ${carObject.model}.`;
}

// Step 3: Test the Function
let description = getDescription(car);
console.log(description);
