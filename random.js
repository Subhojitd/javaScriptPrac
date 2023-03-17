//The function
const randomNum = (() => {
    //Random number is genereted using math.random function
    return Math.floor(Math.random() * 100) + 1;
  })();
  
  console.log(randomNum);//printing the random output
