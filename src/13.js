`const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const mathOperation = req.query.operation;
  let result;
  switch (mathOperation) {
    case 'add':
      result = add(req.query.num1, req.query.num2);
      break;
    case 'subtract':
      result = subtract(req.query.num1, req.query.num2);
      break;
    case 'multiply':
      result = multiply(req.query.num1, req.query.num2);
      break;
    case 'divide':
      result = divide(req.query.num1, req.query.num2);
      break;
  }
  res.send(result);
});
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
  return a / b;
}`