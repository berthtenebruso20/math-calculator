function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error("Cannot divide by zero");
  }
}

// Example usage:
const result = add(5, 3);
console.log(result); // Output: 8
