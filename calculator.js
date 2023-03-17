// Importing the promt module
const prompt = require("prompt-sync")();
// Ask the user to enter two numbers and operator
const num1= prompt("Enter the first number : ")
const num2= prompt("Enter the second number : ")
const oper = prompt("Enter the operator [+,-,*,/]")
// Initialising the result
let result;

// Applying the switch case
switch(oper){
    case "+":
        result= num1+num2
        break
    case "-":
        result= num1-num2
        break
    case "*":
        result= num1*num2
        break
    case "/":
        result= num1/num2
        break
    default:
        console.log("Invalid Operator")

}

// If the result in defined then print it to console
if (result !== undefined){
    console.log(`${num1} ${oper} ${num2} = ${result}`)
}