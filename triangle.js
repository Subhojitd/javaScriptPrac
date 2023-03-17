// Initialising the promt function
const prompt = require("prompt-sync")();

// Initializing the constant
const i =parseInt(prompt("Enter the no of rows you want for triangle : "))

// Loop for printing each row 
for(row=i; row>0 ; row--){
    let pattern = ""
    // loop for printing coloumn for each row
    for(let col=0; col<row; col++){
        pattern += "*"
    }
    // Printing the pattern
    console.log(pattern)
}