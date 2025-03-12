const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const num1 = Math.random() * 10;
  const num2 = Math.random() * 10;
  const result = num1 + num2;
  res.json({ num1, num2, result });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
