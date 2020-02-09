var express = require('express');
var app = express();
app.get('/', function (req, res) {
res.send('Hello, World! aquí ando. Está es la versión 2..... \n');
});
app.listen(8080, function () {
console.log('Example app listening on port 8080! v2');
});
module.exports = app;