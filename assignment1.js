let a = 20;
let b = 6;

// Subtraction / Difference
let difference = a - b;        // 14

// Modulus (Remainder)
let modulus = a % b;           // 2

// Power
let power = a ** b;            // 20^6 = 64000000

console.log("Difference:", difference);
console.log("Modulus:", modulus);
console.log("Power:", power);
   
// Arrays are ordered collections of items. You access elements by index (starting at 0)

let numbers = [10, 20, 30, 40];

// push() – Add to end
numbers.push(50);              // [10, 20, 30, 40, 50]

// pop() – Remove last
numbers.pop();                 // [10, 20, 30, 40]

// shift() – Remove first
numbers.shift();               // [20, 30, 40]

// unshift() – Add to beginning
numbers.unshift(5);            // [5, 20, 30, 40]

// splice() – Insert at index 2, remove 1, add 25
numbers.splice(2, 1, 25);      // [5, 20, 25, 40]

console.log("Final array:", numbers); // [5, 20, 25, 40]
