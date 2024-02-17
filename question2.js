const prompt = require('prompt-sync')();

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Prompt the user to enter the starting and ending numbers
let start = parseInt(prompt("Enter the starting number:"));
let end = parseInt(prompt("Enter the ending number:"));

// Find and print all prime numbers in the range
let primeNumbers = [];
for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
        primeNumbers.push(i);
    }
}

console.log(`The prime numbers between ${start} and ${end} are ${primeNumbers.join(', ')}`);
