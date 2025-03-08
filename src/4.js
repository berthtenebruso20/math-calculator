  const express = require('express');
const app = express();
app.use(express.json());

// POST route to calculate the sum of two numbers
app.post('/add', (req, res) => {
  // Get the two numbers from the request body
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  
  // Calculate the sum of the two numbers
  const sum = num1 + num2;
  
  // Return the result as JSON
  res.json({ sum });
});

// POST route to calculate the difference between two numbers
app.post('/subtract', (req, res) => {
  // Get the two numbers from the request body
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  
  // Calculate the difference between the two numbers
  const diff = num1 - num2;
  
  // Return the result as JSON
  res.json({ diff });
});

// POST route to calculate the product of two numbers
app.post('/multiply', (req, res) => {
  // Get the two numbers from the request body
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  
  // Calculate the product of the two numbers
  const prod = num1 * num2;
  
  // Return the result as JSON
  res.json({ prod });
});

// POST route to calculate the quotient of two numbers
app.post('/divide', (req, res) => {
  // Get the two numbers from the request body
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  
  // Calculate the quotient of the two numbers
  const quotient = num1 / num2;
  
  // Return the result as JSON
  res.json({ quotient });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});