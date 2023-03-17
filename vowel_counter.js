// Importing the prompt module
const prompt = require("prompt-sync")()

const name = prompt("Enter your name : ");//Taking the name input

let vowelCount = 0; // Initializing the vowel count

// Incrementing the value of vowelcount 
for(let i = 0; i<name.length;i++){
    if(/[aeiou]/i.test(name[i])){
        vowelCount++;
    }
}

// Printing the vowel count
console.log(`The name ${name} has ${vowelCount} vowels.`);






