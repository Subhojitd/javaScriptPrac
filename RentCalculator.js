// Initialising the promt function
const prompt = require("prompt-sync")();
// Create a function for rent calculation
function RentCostCalculator(daysRented,carType){
    let rentalCostperday;//Initialization of car type
    
    // Use switch case to iterate through all rates
    switch(carType){
        case "Economy":
            rentalCostperday = 4000;
            break;
        case "Midsize":
            rentalCostperday = 10000;
            break;
        case "Luxury":
            rentalCostperday = 20000;
            break;
        default:
            console.log("Invalid Car type !!!!") 
    }
    // multiplying the rent cost per day with no of days rented 
    const totalRentCost = rentalCostperday*daysRented
    return totalRentCost
}
// Asking the user to input the cartype and days rented
const carType=prompt("Enter the type of the car Economy,Midsize or Luxury : ")
const daysRented =prompt("Enter the days you rented : ")
const total = RentCostCalculator(daysRented,carType)//Call the function to get the total
console.log(`The total bill of your car rented is ${total}`)


