//Create an array of five numbers. Use map to double them and filter to extract numbers greater than 5
// Step 1: Create an array of five numbers
const numbers = [1, 2, 3, 4, 5];

// Step 2: Use map to double each number
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// Step 3: Use filter to get numbers greater than 5
const greaterThanFive = doubled.filter(num => num > 5); // [6, 8, 10]

// Output the result
console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Greater than 5:", greaterThanFive);


// Use .map() function/method to convert an array of prices to prices with 16% value added tax VAT and show the final cost. 

//.map() is a method used to transform each item in an array and create a new array with the results.
// Original prices (without VAT)

const prices = [100, 200, 300, 400];

// Use .map() to add 16% VAT
const pricesWithVAT = prices.map(price => (price * 1.16).toFixed(2));

// Show the final costs
console.log("Prices with 16% VAT:", pricesWithVAT);

// Step 1: Create a list of 5 countries
// Step 2: Use .slice() to get a portion of the list
// Step 3: Use .filter() to get countries with names longer than 5 characters
  
// list of 5 countries
const countries = ["India", "Germany", "Brazil", "France", "Japan"];

//sliced() countries

const someCountries = countries.slice(0, 3); 
// filtered by lenghth
const longNamedCountries = countries.filter(country => country.length > 5);


console.log("All countries:", countries);
console.log("Sliced portion:", someCountries);
console.log("Countries with names longer than 5 characters:", longNamedCountries);
  