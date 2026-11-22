const prompt = require("prompt-sync")();
const number = Number(prompt("Enter an integer:"));
const square = number * number;

console.log("Number:", number);
console.log("Square:", square);

console.log("Number greater than 100:", number > 100);
console.log("Number equal to 100:", number == 100);
console.log("Number not equal to 100:", number != 100);
console.log("Number less than 100:", number < 100);

console.log("Square greater than 100:", square > 100);
console.log("Square equal to 100:", square == 100);
console.log("Square not equal to 100:", square != 100);
console.log("Square less than 100:", square < 100);
