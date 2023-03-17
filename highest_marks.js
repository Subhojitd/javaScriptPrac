// Importing the prompt module
const prompt = require("prompt-sync")();
// Get an array of marks from user input
const marks = prompt("Enter the marks sepertated by commas : ").split(",");

// Convert the marks to numbers using loop
for(let i = 0;i<marks.length;i++){
  marks[i]=Number(marks[i]);
}

// Initializing the highest marks
let highestMarks = 0;

// Iterate through the array of marks for getting highest marks
for(i=0;i<marks.length;i++){
  highestMarks = marks[i]> highestMarks ? marks[i] : highestMarks;
}
// Printing the highest marks
console.log(`The highest marks among the students is ${highestMarks} `)