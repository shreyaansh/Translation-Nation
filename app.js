/*eslint-env node*/
var express = require('express');
var cfenv = require('cfenv');
var app = express();
app.use(express.static(__dirname + '/public'));
cfenv.getAppEnv();

var bodyParser = require('body-parser');

var watson = require('watson-developer-cloud');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.set('port', process.env.PORT || 6004);
app.set('ip', process.env.IP || "localhost");

//Default REST Call for Testing
app.post('/hello', function(req, res) {
	console.log("It comes here!" + res.statusCode);
	var language_translation = watson.language_translation({
	username: '630d4a74-1870-401e-9823-e4bd457b6ad8',
	password: 'KWHqPtSgvjBo',
	version: 'v2'
	});

	language_translation.translate({
		text: req.body.message,
		source: 'en',
		target: req.body.language
	}, function(err, translation) {
	if(err) {
		console.log(err);
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

app.listen(app.get('port'),app.get('ip'), function() {
  	console.log("Server is listening on port "+app.get('port')+" and ip "+app.get('ip'));
	
	console.log("Hello Boiz!!! Printed on Screen");
});