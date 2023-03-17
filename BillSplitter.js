// Initialising the promt function
const prompt = require("prompt-sync")();
// Create a function for bill Splliting
function billSplitter(costPerDish,noOfPeopleSharing){
    
    //Calculate the total cost and bill per person
    const totalCost = costPerDish * noOfPeopleSharing;
    const billPerPerson = totalCost / noOfPeopleSharing; 
    result={
        totalCost:totalCost,
        billPerPerson:billPerPerson
    };
    return result;

}
//use the function for bill generation
const costPerDish = prompt("Please input the cost per dish : ")
const noOfPeopleSharing = prompt("Tell How many people are sharing : ")
const bill = billSplitter(costPerDish,noOfPeopleSharing)
console.log(bill)




