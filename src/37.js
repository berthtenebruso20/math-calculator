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
    throw new Error("Divide by zero error");
  }
}

// Example usage
console.log(add(5, 3)); // Output: 8

console.log(subtract(10, 4)); // Output: 6

console.log(multiply(7, 2)); // Output: 14

try {
  console.log(divide(5, 0));
} catch (error) {
  console.error("Error:", error.message);
}
