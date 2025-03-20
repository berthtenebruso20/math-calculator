const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const result = calculate(req.query.numbers);
  res.json({ result });
});

function calculate(numbers) {
  // Your code here
}

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
