// Importing required libraries and modules
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const result = calculate(req.query.num1, req.query.num2, req.query.operation);
  res.send(`${result}`);
});

function calculate(num1, num2, operation) {
  switch (operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      if (num2 === 0) {
        throw new Error('Cannot divide by zero');
      }
      return num1 / num2;
    default:
      throw new Error(`Unsupported operation ${operation}`);
  }
}

app.listen(port, () => console.log(`Server started on port ${port}`));
