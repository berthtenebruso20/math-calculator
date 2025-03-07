const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const result = req.query.number1 + req.query.number2;
  res.json(result);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
