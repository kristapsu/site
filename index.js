var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  //for php server - res.send('Hello World!');
});

app.listen(3000, function () {
  // for php server - console.log('Example app listening on port 3000!');
  console.log('working');
});
