// Initialising the promt function
const prompt = require("prompt-sync")();

// The function
function calcualteDiscountPercentage(originalPrice,discountedPrice){
   const discount = originalPrice-discountedPrice;
   const discountPercentage=(discount/originalPrice)*100
   return discountPercentage.toFixed(2) 
}
//Call the function
const originalPrice = prompt("Enter the original Price : ");
const discountedPrice =prompt("Enter the discounted price : "); 
const promo = calcualteDiscountPercentage(originalPrice,discountedPrice)
console.log(`Hey buddy !!  You can save ${promo} %`)