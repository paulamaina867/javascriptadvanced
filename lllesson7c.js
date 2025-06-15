//inheritance
//this is where oneclas(subclass)inherits from another class(superclass)propeties and behavior of that class
//superclass
class Animal{
    eat(){
        console.log("Animal is eating......")
    }
    drink(){
        console.log("the animl is rinking water......")
    }
};

//subclass
class cat extends Animal{
    meow(){
        console.log("meow......")
    }
    walk(){
        console.log("the cat walks.........")
    }
}


//create an object for the class cat

let whispers= new cat();
whispers.eat();
whispers.drink();
whispers.walk();

//create a superclass called fish it should have atleast three methds and two properties.create a subclass called tilapia the subclass should inherit from the superclass atleast one functon and a property create an object for the class tilapia to access the inherited properties and methods