
// code that will create the server
var express = require('express');
var app = express();
var server = require('http').createServer(app);

// the app.get methods will allow you to navigate around the website
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/templates/index.html');
});

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/templates/about.html');
});

app.get('/settings', function(req, res) {
    res.sendFile(__dirname + '/templates/settings.html');
});

app.get('/store', function(req, res) {
    res.sendFile(__dirname + '/templates/store.html');
});

// the app.use method will let you to access static files (such as the CSS file)
app.use('/templates',express.static(__dirname + '/templates'));

console.log("server started");

server.listen(4141);