// Importing the promt module
const prompt = require("prompt-sync")();
// Taking prompt as a name
const name = prompt("Enter your name: ")

// Check if the name is capitalize if not then capitalize it
const capitalizedname = name.charAt(0).toLowerCase()===name.charAt(0) ? name.charAt(0).toUpperCase() + name.slice(1) :name;

// Print the capitalized name 
console.log(capitalizedname)