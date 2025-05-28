//map()methods
//array()methods

let numbers =[1,2,3,4,5]
console.log(numbers)

//summing the numbers
let sum =0;
let answers = numbers.map(n=> sum= sum+n)

console.log("the answer is:"+ sum)


//filter function
let even = numbers.filter(n=>n% 2===0);

//generate array of odd numbers from the previous array

let odd = numbers.filter(n => n % 2 !== 0);
console.log("the even numbers are:"+ even)

console.log("Odd numbers:", odd); 

// generate an array of odd numbers from the array of numbers above
//  Assignment: Create an array of five numbers. Use map to double them and filter to extract numbers greater than 5

// Use .map() function/method to convert an array of prices to prices with 16% value added tax VAT and show the final cost.


// Assignment
// Step 1: Create a list of 5 countries
// Step 2: Use .slice() to get a portion of the list
// Step 3: Use .filter() to get countries with names longer than 5 characters
