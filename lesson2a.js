// array datatypes
// its a collection of related items which are of the same datatype


let fruits =["banana","apple","orange","grape"];

console.log( fruits[2]);

// push we use it to add an item at the end of the array
fruits.push("mango");
console.log("fruits");

//slice we use it to output from a given index to another
let somefruits = fruits.slice(1,3);
console.log(somefruits);

//pop  used to remove an item of an array that appear at the end
console.log(fruits)
fruits.pop()
console.log(fruits)
console.log("the number of items in the array is:"+ fruits.length)

let cities=["Nairobi","Mombasa","Nakuru","Eldoret", "Machakos","Meru"];
console.log(cities)
//filter method is used to show output based on the outputs
let updatedcities = cities.filter(item=> item!=="Meru");
console.log(updatedcities)