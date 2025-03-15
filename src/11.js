const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const operator = req.query.operator;

  let result = null;

  if (operator === 'add') {
    result = num1 + num2;
  } else if (operator === 'subtract') {
    result = num1 - num2;
  } else if (operator === 'multiply') {
    result = num1 * num2;
  } else if (operator === 'divide') {
    result = num1 / num2;
  }

  res.send(`${result}`);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
