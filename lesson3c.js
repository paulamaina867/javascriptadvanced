// control flow statements
let age = 2;

if (age >= 18){
    console.log("You are an Aldult.")
}
else {
    console.log("You are a minor.")
}

// if alse if statement.
// It is used to evaluate multiple conditions. It returns true if a condition is met
let grade = 100.1;

if (grade > 100){
    console.log("Invalid Grade input.")
}
else if (grade >= 90 && grade <=100){
    console.log("The grade gotten is A")
}
else if (grade > 80 && grade < 90){
    console.log("The grade gotten is: B")
}
else {
    console.log("Grade C or Below.")
}