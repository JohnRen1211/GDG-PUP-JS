// --- let: can be reassigned, block-scoped ---
let username = "Juan Cruz";
console.log("let username:", username);
username = "Maria Lopez"; // reassignment is allowed
console.log("reassigned username:", username);
console.log("typeof username:", typeof username); // string

// --- const: cannot be reassigned, must be initialized ---
const pi = 3.14159;
console.log("const pi:", pi);
// Uncommenting the next line will cause an error
// pi = 4; // ❌ Error: Assignment to constant variable

// --- var: function-scoped, can be reassigned ---
var age = 25;
console.log("var age:", age);
age = 30; // valid
console.log("reassigned age:", age);
console.log("typeof age:", typeof age); // number

// --- Example with undefined variable ---
let score;
console.log("let score (before assignment):", score);
console.log("typeof score:", typeof score); // undefined
score = 90;
console.log("let score (after assignment):", score);
console.log("typeof score:", typeof score); // number

// --- const object: allowed to mutate contents, not the binding ---
const user = { name: "Ana", role: "student" };
console.log("user object:", user);
// Allowed: changing object properties
user.role = "teacher";
console.log("mutated user object:", user);
// Not allowed: reassigning the object
// user = { name: "Bob" }; // ❌ Error

// --- Summary: Output typeof of different variables ---
console.log("typeof username:", typeof username); // string
console.log("typeof pi:", typeof pi);             // number
console.log("typeof age:", typeof age);           // number
console.log("typeof score:", typeof score);       // number
console.log("typeof user:", typeof user);         // object
