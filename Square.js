const prompt = require("prompt-sync")();
const first = Number(prompt("Enter first integer: "));
const second = Number(prompt("Enter second integer: "));

console.log("First square:", first * first);
console.log("Second square:", second * second);
console.log("Sum of squares:", first * first +second * second);
console.log("Difference of squares:",first * first - second * second);
