// A class representing a vehicle
class Vehicle {
    // The constructor initializes the properties
    constructor(make, model, year) {
        this.make = make;     // e.g., Toyota
        this.model = model;   // e.g., Corolla
        this.year = year;     // e.g., 2022
    }

    // A method to display vehicle information
    displayInfo() {
        console.log(`Vehicle: ${this.year} ${this.make} ${this.model}`);
    }

    // A method to simulate starting the engine
    startEngine() {
        console.log(`${this.make} ${this.model}'s engine has started.`);

        
    }
}

// Creating objects (instances) of the Vehicle class
let vehicle1 = new Vehicle("Toyota", "Camry", 2021);
vehicle1.displayInfo();
vehicle1.startEngine();

let vehicle2 = new Vehicle("Ford", "Mustang", 2023);
vehicle2.displayInfo();
vehicle2.startEngine();
