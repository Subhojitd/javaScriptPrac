// Importing the prompt module
const prompt = require("prompt-sync")()
// Taking input of two colors
const color1= prompt("Enter the first color: ")
const color2= prompt("Enter the second color: ")

// Initializing the result color

let resultcolor

// Uning Switch case to combine the colors

switch(color1.toLowerCase()){
    case "red":
        switch(color2.toLowerCase()){
            case "blue":
                resultcolor="purple"
                break
            case "yellow":
                resultcolor="orange"
                break
            default:
                resultcolor="Invalid color combination"
        }
        break
    case "blue":
        switch(color2.toLowerCase()){
            case "red":
                resultcolor="purple"
                break
            case "yellow":
                resultcolor="green"
                break
            default:
                resultcolor="Invalid color combination"
        }
        break
    case "green":
        switch(color2.toLowerCase()){
            case "red":
                resultcolor="black"
                break
            case "yellow":
                resultcolor="light green"
                break
            default:
                resultcolor="Invalid color combination"
        }
        break
    default:
        console.log("Invalid Color combination ")
}
// Printing the result color
console.log(`The resulting color is ${resultcolor}`)