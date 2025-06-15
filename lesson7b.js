//data hiding/abstraction
//this is the aspect of hiding the implementation of complex tasks and showing to the user
//an interactivity channel
//users only need to know how to use something not how it ha been implemented at the backend


class coffemachine{
    #startEngine(){
    console.log("heating water........")
    }

    brew(){
        console.log("start coffee......")
        this.#startEngine()
        console.log("coffe is ready")
    }
};

let coffe = new coffemachine();
coffe.brew();

//create  an example of my own demonstrating aspect of data hiding