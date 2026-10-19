// 1. Get information from the user
let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));
let marks = Number(prompt("Enter your marks:"));

// 2. Display student information
console.log("===== Student Information =====");
console.log("Name: " + name);
console.log("Age: " + age);
console.log("Marks: " + marks);

// 3. Check the result
if (marks >= 40 && marks <= 100) {
    console.log("Result: Pass");
} else if (marks >= 0 && marks < 40) {
    console.log("Result: Fail");
} else {
    console.log("Invalid marks!");
}