// let rawName = "   diana karanja  ";
// let rawEmail = "DianaKaranja@Email.com   ";
// let course = "Introduction to coding";
// let age1 = 17;
// Assignment:
// Welcome, Diana Karanja!
// Email: dianakaranja@email.com
// Course: INTRODUCTION TO CODING
// Your email address has 25 characters.
// First name: Diana
// Updated course: Introduction to JavaScript
// Initials: D.K.


let rawName = "   diana karanja  ";
let rawEmail = "DianaKaranja@Email.com   ";
let course = "Introduction to coding";
let age1 = 17;

// Step 1: Clean and format the name
let name = rawName.trim();
name = name
  .split(" ")
  .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");

// Step 2: Clean and format the email
let email = rawEmail.trim().toLowerCase();

// Step 3: Capitalize course
let courseUpper = course.toUpperCase();

// Step 4: Email character count
let emailLength = email.length;

// Step 5: Extract first name
let firstName = name.split(" ")[0];

// Step 6: Update course
let updatedCourse = "Introduction to JavaScript";

// Step 7: Get initials
let names = name.split(" ");
let initials = names.map(n => n[0].toUpperCase()).join(".");

console.log(`Welcome, ${name}!`);
console.log(`Email: ${email}`);
console.log(`Course: ${courseUpper}`);
console.log(`Your email address has ${emailLength} characters.`);
console.log(`First name: ${firstName}`);
console.log(`Updated course: ${updatedCourse}`);
console.log(`Initials: ${initials}.`);
