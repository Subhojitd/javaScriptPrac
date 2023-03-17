// Importing the prompt module
const prompt = require("prompt-sync")()
// ask for user input
const items = prompt("Enter items separated by commas:"); 
// convert input string to an array and remove whitespace
const cartWithDuplicates = items.split(",").map(item => item.trim()); 
// create a new Set and spread it into an array
const cartWithoutDuplicates = [...new Set(cartWithDuplicates)]; 
// print the cart without duplicates
console.log(cartWithoutDuplicates); 
