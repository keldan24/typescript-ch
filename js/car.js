"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Implement the Car class that adheres to the Vehicle interface
class Car {
    // Constructor to initialize make, model, and year
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implement the start method
    start() {
        console.log('Car engine started');
    }
}
// Export the Car class
exports.default = Car;
