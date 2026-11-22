const prompt = require("prompt-sync")();
let number = Number(prompt("Enter an integer:"));

if (number % 3 == 0) {
    console.log("Divisible by 3");
} else {
    console.log("Not divisible by 3");
}
