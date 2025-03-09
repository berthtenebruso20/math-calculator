// Get two numbers from the user using prompt()
let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));

// Perform addition, subtraction, multiplication, or division based on user input
switch (prompt("Select operation. (1) Addition (2) Subtraction (3) Multiplication (4) Division )")) {
  case "1":
    alert(num1 + num2);
    break;
  case "2":
    alert(num1 - num2);
    break;
  case "3":
    alert(num1 * num2);
    break;
  case "4":
    alert(num1 / num2);
    break;
  default:
    alert("Invalid operation selected.");
}
