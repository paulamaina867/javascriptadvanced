//classess amd objects in javascript
// A class is a blueprint  which usually contains properties and methods
//we use keyword classes to declare a class in js

class Dog{
    //we use constractor to initialize properties
    //the keyword constructor is used
    constructor(name,breed){
        //to acces the properties we use 'this' keyword

        this.name=name;
        this.breed=breed;

    }
    //actions<=methods/functions/behaviors
    bark(){
        console.log(`${this.name}says hoof!`)
        console.log(`${this.breed}this is a good one`)
    }
};

//creating an object for the class dog
//object is an instance of a class meaning it is usually created from a class

let dog1 = new Dog("Buddy","German shepherd")
dog1.bark();


let dog2 = new Dog("puppy","Golden Retriever")
dog1.bark();

//create a class of a vehicle  that should have 3 properties   and atleast two methods