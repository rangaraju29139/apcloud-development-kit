var express = require('express');
var app = express();

//server port
var port = 3000;

//Serving text
app.get('/text', function(req, res) {
    res.send('Hello AP Cloud');
});

//Serving html file
app.get('/file', function(req, res) {
    res.sendFile(__dirname + "/" + 'index.html');
});

//listen on port
app.listen(port);
console.log("Server is listening on port " + port);
