// Initialising the promt function
const prompt = require("prompt-sync")();
// taking an input for password
const password = prompt("Enter a Password : ");
// taking another input for confirming
const confirmpassword = prompt("Confirm your password : ")

// Check if the password matches
if(password===confirmpassword){
    console.log("Password matched. Password validation successful")
}else{
    console.log("Password didn't matched.Password validation unsuccessful")
}