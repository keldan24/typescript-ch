"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the Car class
const car_1 = __importDefault(require("./car"));
// Create an instance of the Car class
const myCar = new car_1.default('Toyota', 'Corolla', 2022);
// Call the start method
myCar.start(); // Expected output: "Car engine started"
