//Data Structures: Objects 

//Example1: 
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021,
    // Traditional Function Syntax (with the function keyword):
    startEngine: function() {
        console.log(`${this.brand} ${this.model} engine started.`);
    }
};

// Accessing properties
console.log(car.brand);  
console.log(car.model);  

// Calling a method
car.startEngine(); 


//Example1: 
const luxcar = {
    brand: "Toyota",
    model: "Camry",
    year: 2021,
    // ES6 Shorthand Method Syntax:
    startEngine() {
        console.log(`${this.brand} ${this.model} engine started.`);
    }
};

// Accessing properties
console.log(luxcar.brand);  
console.log(luxcar.model);  

// Calling a method
car.startEngine(); 