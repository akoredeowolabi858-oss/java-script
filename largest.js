const prompt = require("prompt-sync")();
let first = Number(prompt("Enter first integer:"));
let second = Number(prompt("Enter second integer:"));
let third = Number(prompt("Enter third integer:"));

let sum = first + second + third;
let average = sum / 3;
let product = first * second * third;

console.log("Sum:", sum);
console.log("Average:", average);
console.log("Product:", product);
console.log("Smallest:", Math.min(first , second , third));
console.log("Largest:", Math.max(first , second , third));
