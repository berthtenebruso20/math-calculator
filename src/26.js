function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) throw new Error('Divisor cannot be zero.');
  return x / y;
}

// Example usage:
console.log(add(10, 5)); // Output: 15
console.log(subtract(10, 5)); // Output: 5
console.log(multiply(10, 5)); // Output: 50
console.log(divide(10, 5)); // Output: 2.0
