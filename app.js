var express = require('express');
var cfenv = require('cfenv');
var app = express();
app.use(express.static(__dirname + '/public'));
var appEnv = cfenv.getAppEnv();

var routes = require('./routes');
var http = require('http');

app.set('port', (process.env.PORT || 6002));
app.set('ip', (process.env.IP || "localhost"));

//Default REST Call for Testing
app.get('/hello', function(request, response) {
	//response.send('Hello World!');
	console.log("call comes here");
});

//Set the actual API Calls here!

var server = app.listen(app.get('port'),app.get('ip'), function() {
  	console.log("Server is listening on port "+app.get('port')+" and ip "+app.get('ip'));
	
	console.log("Hello Boiz!!! Printed on Screen");
});
