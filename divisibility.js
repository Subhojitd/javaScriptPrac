// Importing the promt module
const prompt = require("prompt-sync")();

// Take the input and convert it into an array
const input  = prompt("Enter the numebrs seperated by commas : ");
const numbers = input.split(",").map(Number);

// Iterate through the array and get the current element
for(i=0;i<numbers.length;i++){
    num= numbers[i];
    //checking if the num is divisible or not
    if(num%3===0 && num%2!==0){
        console.log(num)//printing the num
    }else{
        continue;//otherwise skip through the next iteration of the loop
    }
}
