const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const operator = req.query.operator;

  let result = '';

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        result = 'Error: cannot divide by zero';
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = 'Invalid operator';
  }

  res.send(`The result of ${num1} ${operator} ${num2} is ${result}`);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
