// Define a customer object with a name and balance property
const customer = {
    name :'Subhajit',
    balance : 5000,

    //Define a method for money deposit
    deposit(amount){
        this.balance += amount;
        console.log(`Deposited ${amount} in your account. Your new balance is ${this.balance}`)
    },
    //Define a method for withdraw
    withdraw(amount){
        if(amount>this.balance){
            console.log(`Insufficient Balance. Cannot withdraw ${amount}`)
        }else{
            this.balance -=amount;
            console.log(`Withdrawed Rs ${amount}. New balance ${this.balance}`)
        }
    }

}
// Testing the deposit and withdraw methods 
customer.deposit(2000)
customer.withdraw(1000)
customer.withdraw(10000)