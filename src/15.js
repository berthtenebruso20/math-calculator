var express = require('express');
var app = express();
app.use(function (req, res) {
    var result;
    if (req.query.op === 'add') {
        result = req.query.a + req.query.b;
    } else if (req.query.op === 'subtract') {
        result = req.query.a - req.query.b;
    } else if (req.query.op === 'multiply') {
        result = req.query.a * req.query.b;
    } else if (req.query.op === 'divide') {
        result = req.query.a / req.query.b;
    }
    res.send(result);
});
app.listen(3000, function () {
    console.log('Server started on port 3000');
});
