var express = require('express');
var cfenv = require('cfenv');
var app = express();
app.use(express.static(__dirname + '/public'));
var appEnv = cfenv.getAppEnv();

var routes = require('./routes');
var http = require('http');
var bodyParser = require('body-parser');

var watson = require('watson-developer-cloud');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('port', (process.env.PORT || 6004));
app.set('ip', (process.env.IP || "localhost"));

//Default REST Call for Testing
app.post('/hello', function(req, res) {
	console.log("It comes here!" + res.statusCode);
	var language_translation = watson.language_translation({
	username: '82e40ac6-13ce-4548-b3c6-9e714153aac8',
	password: 'M1LEFR1wsaAH',
	version: 'v2'
	});

	language_translation.translate({
		text: req.body.message,
		source: 'en',
		target: req.body.language
	}, function(err, translation) {
	if(err) {
		console.log(err)
	} else {
		console.log(translation);
		res.send(translation.translations[0].translation);
	}
	});
});

app.get('/hello', function(request, response) {
	console.log("Hello!");
	response.send("Hello World");
});

var server = app.listen(app.get('port'),app.get('ip'), function() {
  	console.log("Server is listening on port "+app.get('port')+" and ip "+app.get('ip'));
	
	console.log("Hello Boiz!!! Printed on Screen");
});