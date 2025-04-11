// Import necessary packages if any
// For this example, let's assume no external packages are required

// Define a function to perform basic math operations (addition, subtraction)
function performOperation(num1, num2, operation) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      throw new Error("Unsupported operation");
  }
}

// Example usage
const math = require('./path-to-your-project-math-calculator');

console.log(math.performOperation(5, 3, '+')); // Output: 8
console.log(math.performOperation(5, 3, '-')); // Output: 2
