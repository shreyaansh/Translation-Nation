var express = require('express');
var cfenv = require('cfenv');
var app = express();
app.use(express.static(__dirname + '/public'));
var appEnv = cfenv.getAppEnv();

var routes = require('./routes');
var http = require('http');
var path = require('path');
var auth = require('basic-auth');

app.get('api/simplemessage', routes.simplemessage(pool));

app.listen(appEnv.port, '0.0.0.0', function() {
  	console.log("server starting on " + appEnv.url);
	
	console.log("Hello Boiz!!! Printed on Screen");
});
