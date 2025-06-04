let name = " Alice Wanjiku "
let age = 35


// removing leading/trailing spaces en buliding a greeting using string literal

let greeting =  `hello,${name.trim()}! you are ${age} years old`
console.log (greeting)

//convert greeting to uppercase
let convertedgereeting =greeting.toUpperCase()
console.log(convertedgereeting)


//slice it enables to extract characters from  given index to another
console.log(name.trim().slice(2,4))//output ic
 

//includes function used to check whether a given character exists in a given string
//returns boolean
console.log(name.trim().includes('c'))

//tolowercase used to convert all the characters of a strting to lowercase
console.log(name.toLowerCase().trim())

//substring () similar to  slice it extracts part of a string
console.log(name.trim().substring(6,8).toLowerCase())


//index off("pass a letter") returns the position of the first accurence of the letter
console.log(name.trim().indexOf('W'))

// length returns the total number of characters including spaces
console.log(name.trim().length)

//replace(old,new)- replaces first occurence of a substring 
let replacedname =name.replace("Alice","Jessica")
console.log(replacedname)


//find out how to replace multiple ocurrences at once

const fruits = ["apple", "banana", "apple", "orange", "banana"];

const replacements = {
  apple: "kiwi",
  banana: "grape",
  orange: "melon"
};

const replacedFruits = fruits.map(word => replacements[word] || word);

console.log(replacedFruits); 

//chartArt() this function normally finds /outputs the character in a given index
console.log("letter in index five is: "+ name.trim().charAt(4))


//split (separator) spilts string into an array
console.log(name.trim().split(" "))


//endwith()checks if the string  ends with a certain value returns a boolean value
console.log(name.trim().endsWith("Wanjiku"))

//startsWith(substring) checks whether the string starts with a certain value
console.log(name.trim().startsWith("Alice"))

//repeat() repeats the string and number of times

console.log(name.trim().repeat(3))