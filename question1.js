const prompt = require('prompt-sync')();

// Prompt the user to enter a temperature
let temp = prompt("Enter a temperature:");

// Prompt the user to specify where the temperature is in Celsius or Fahrenheit
let unit = prompt("Is this temperature in Celsius (C) or Fahrenheit (F)?");

// Convert the temperature to the other unit using the Formula given in the question
let convertedTemp;
if (unit.toUpperCase() === 'C') {
    convertedTemp = (temp * 9/5) + 32;
    console.log(`${temp}°C in Fahrenheit is ${convertedTemp}°F`);
} else if (unit.toUpperCase() === 'F') {
    convertedTemp = (temp - 32) * 5/9;
    console.log(`${temp}°F in Celsius is ${convertedTemp}°C`);
} else {
    console.log("Invalid unit. Please enter 'C' for Celsius or 'F' for Fahrenheit.");
}
