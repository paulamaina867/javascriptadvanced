// Arrow functions:
// They were introduced in the current version of Javascript i.e. ecma version 6.
// They help us to come up with simplified structure of a function
// Example:

const greetings = () =>{
    console.log("Hello there...")
}

greetings();

// create an arrow function that adds two numbers. Call it summation.

// Arrow function with parameters
const greeting = (name) =>{
    console.log(`Hello ${name}. How have you been? Good to see you...`)
};

greeting("Bernard");
greeting("Joseph");

// An arrow function that finds the products of three numbers
const product = (num1, num2, num3) =>{
    let total = num1 * num2 * num3;

    console.log(`The product of the numbers is: ${total.toFixed(2)}`)
};


product(45.5, 12.6, 7);
product(4, 8, 26.8545);

// Assignment: Create an arrow function that is able to find the simple interest of three different individuals