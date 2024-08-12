// Import the Vehicle interface
import { Vehicle } from './vehicle';

// Implement the Car class that adheres to the Vehicle interface
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  // Constructor to initialize make, model, and year
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Implement the start method
  start(): void {
    console.log('Car engine started');
  }
}

// Export the Car class
export default Car;
