var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World 3!');
  var fs = require('fs');
  var x = fs.readFileSync("index.html");
  var buffer = new Buffer(x);
  //response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
