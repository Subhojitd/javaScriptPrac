// Initialising the promt function
const prompt = require("prompt-sync")();
const cart = JSON.parse(prompt("Enter your cart items as an array of objects in JSON format:"));

const calculateTotalCost = (cart) => {
  let totalCost = 0;
  for (let item of cart) {
    totalCost += item.unitPrice * item.quantity;
  }
  return totalCost;
};

const totalCost = calculateTotalCost(cart);
console.log(`Total cost of items in cart: Rs. ${totalCost}/-`);
