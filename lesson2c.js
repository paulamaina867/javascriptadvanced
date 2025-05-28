//object datatype
//an object is a datatype that organizes dataa in terms of key value pairs
let student={
    name:"james joe",
    age:19,
    grade: "A",
    isEnrolled:true

};

//acces the values by use of  dot notation
console.log("the name of the student:"+student.name)
console.log("the age of the student:"+student.age)
console.log("the grade of the student:"+student.grade)

//acces bu use of  bracket notation
console.log("the grade of the student:"+student["grade"])
console.log("the name of the student:"+student["name"])

// create two objects of a player, a car


let user={
    username:"paulinemaina",
    emmail:"paulinemaina@gmail.com"

};

//destructing of the pproperties of an array
let{username,email}=user;
console.log(username)
console.log(email)

//  Assignment: Create an object product with properties id name, cost, quantity
//  and description. Use destructuring to extract and log them


// Step 1: Create the product object
const product = {
  id: 101,
  name: "Wireless Mouse",
  cost: 25.99,
  quantity: 50,
  description: "A smooth and responsive wireless mouse."
};

// Step 2: Use destructuring to extract the properties
const { id, name, cost, quantity, description } = product;

// Step 3: Log the extracted values
console.log("ID:", id);
console.log("Name:", name);
console.log("Cost:", cost);
console.log("Quantity:", quantity);
console.log("Description:", description);
