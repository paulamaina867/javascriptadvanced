//loops 
//loops statement allows us to execute a block of codee repeatedly  until a condition is met
//we have several types of loops in js 

//for loop


//structure for  the for loop
//for(initialization:condition;increment/decrement)


for (let i = 1; i <= 5; i++){
    console.log("The values are: " + i)
}

// 2. While loop
// structure:
// initialize a variable with some values 
// while (condition){
// code to execute
// }
let j = 1;
while (j <= 5){
    console.log("The value of j is: " + j)
    j++
}
// create a while loop program that is able to print from 100 down to 30.
let num = 100;

while (num >= 30) {
  console.log(num);
  num--; 
}

// do while loop
//this loop is guranteed to run once eveb if the condition is false
//structure initialize a variable with some new values
//do{
//  code rto be executed
 //   while condition}


 let k =1;
 do  {
    console.log(k);
    k++;

 } while (k <= 10);


 //loops can be used to loop throug /iterate through an array

 let countries =["kenya","uganda","tanzania","Burundi","Congo"]
 console.log(countries)


 for (let i =0; i< countries.length; i++){
    console.log(countries[i])
 }


// Break and continue key words in loops
// continue: is a keyword that is used with the continuation of the loop is a condition is met
// break: is a keyword that is used to terminate the execution of the loop after a certain condition is met
// example 1: continue


 for(let i =1; i <= 10; i++){
    console.log(i)
    if (i === 5){
        console.log("Five is here.")
    } continue;
    
};
 ///example 2 break
for(let i =20; i <= 30; i++){
    console.log(i)
    if (i === 26)
        break;
}


