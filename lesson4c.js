//functions

//function is a block of code that performs a given task
// functions without parameters
//structure of a function

//funkeyword followed by the name of the function, the statement to be printed out
 
function greeting(){
    console.log("how have you been")
}

//invoking a function
greeting()


//functions with parameters
///they are additional values that require to pass an argument when calling a function


function greeting (name){
    console.log(`hello${name}.how have you been?`)
};

greeting("pauline");
greeting("Ann")

//function with multiple parameter
function sum(num1, num2, num3){
    let total = num1+ num2+ num3
    console.log("the total number is:"+ total)
};

sum(4,5,10)

//destructuring inn functions

function studentinfo({name,subject,cat1,cat2}){
const total = cat1 + cat2
console.log(`${name}scored${total}marks in${subject}`);
};

studentinfo({
    name:"joseph",
    subject:"mathematics",
    cart1: "34",
    cart2: "40"
    


});


//remind my self on arrow functions 









function multiplyFourNumbers(a, b, c, d) {
  return a * b * c * d;
}

let result = multiplyFourNumbers(2, 3, 4, 5);
console.log(result); 
