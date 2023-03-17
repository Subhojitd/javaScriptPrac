//Creating a function for doubling the quantity
function doubleCartItems(cart){
    // Create a new cart to store doubled quantities
    const doubledCart=[];
    // loop for interating through the items
    for(i=0; i < cart.length; i++){
        // get the current quantity
        const quantity = cart[i];
        // doubleing the quantity
        doubleQuantity= quantity*2;
        //push the doubled quantity to new array
        doubledCart.push(doubleQuantity);
    }
    return doubledCart;//Return the new array of doubled quantities
}
// Testing the function
const cart =[5,32,11,45,2,8]
const newcart = doubleCartItems(cart)
console.log(newcart)