// Initialising the promt function
const prompt = require("prompt-sync")();
// Create a function for conversion
function CelsiusToFarhenheit(temp){
    const farhenhiet = (temp*1.8)+32;
    return farhenhiet; 
}
// Testing the function
temp = prompt("Enter the tempterature in celcius : ")
newTemp =CelsiusToFarhenheit(temp)
console.log(`Temperature in farhenheit is ${newTemp}`)
