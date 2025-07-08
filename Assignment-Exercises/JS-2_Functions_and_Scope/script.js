/********************
 Step 1: Create Global Variables
 - Create two global variables (e.g., globalVar, anotherGlobalVar).
 - Assign any values you like.
********************/
let globalVar = "Hello from the global scope!";
const anotherGlobalVar = 100;


/********************
 Step 2: Create a Function to Demonstrate Function Scope
 - Define a function (e.g., demoFunctionScope).
 - Inside this function:
   1. Declare a local variable (e.g., localVar).
   2. Log both the global variable(s) and the local variable to the console.
   3. Return a string that includes both the global and local variables.
********************/
function demoFunctionScope() {
    let localVar = "I'm only visible inside this function.";
    console.log("Inside demoFunctionScope - globalVar:", globalVar);
    console.log("Inside demoFunctionScope - anotherGlobalVar:", anotherGlobalVar);
    console.log("Inside demoFunctionScope - localVar:", localVar);

    return `Returned: GlobalVar = "${globalVar}", LocalVar = "${localVar}"`;
}


/********************
 Step 3: Call the Function and Log Its Return Value
 - Call your function from Step 2 and store its result in a variable.
 - Use console.log() to display the return value in the console.
********************/
const result = demoFunctionScope();
console.log(result);


/********************
 Step 4: Demonstrate Block Scope
 - Write an if statement that always executes (if (true) { ... }).
 - Inside this block:
   1. Use let to declare a block-scoped variable (e.g., blockVar).
   2. Log the block-scoped variable within the block.
 - Try logging the same variable outside the block and observe what happens.
********************/
if (true) {
    let blockVar = "I'm only accessible within this block.";
    console.log("Inside block - blockVar:", blockVar);
}

try {
    console.log("Outside block - blockVar:", blockVar); // This will throw a ReferenceError
} catch (error) {
    console.log("Outside block - Error:", error.message);
}
