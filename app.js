/*eslint-env node*/
var express = require('express');
var cfenv = require('cfenv');
var app = express();
app.use(express.static(__dirname + '/public'));
var appEnv =cfenv.getAppEnv();
var routes = require('./routes');

var http = require('http');

var bodyParser = require('body-parser');

var watson = require('watson-developer-cloud');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var randomWords = require('random-words');

var Firebase = require("firebase");

var mref = new Firebase("https://translation-nation.firebaseio.com/");

app.set('port', process.env.VCAP_APP_PORT || 6002);
app.set('ip', process.env.VCAP_APP_HOST || "localhost");

//Default REST Call for Testing
app.post('/translate', function(req, res) {
	console.log("It comes here!" + res.statusCode);
	var language_translation = watson.language_translation({
	username: 'e8de384a-58c3-4bae-b2a1-b1324e16b4f0',
	password: 'ndpc66DLERye',
	version: 'v2'
	});

	language_translation.translate({
		text: req.body.message,
		source: req.body.langfrom,
		target: req.body.language
	}, function(err, translation) {
	if(err) {
		console.log(err);
		res.send(req.body.message);
	} else {
		console.log(translation);
		res.send(translation.translations[0].translation);
	}
	});
});



app.get('/hello', function(request, response) {
	console.log(request);
	console.log("Hello!");
	response.send("Hello World");
});

app.listen(app.get('port'),app.get('ip'), function() {
  	console.log("Server is listening on port "+app.get('port')+" and ip "+app.get('ip'));
	
	console.log("Hello Boiz!!! Printed on Screen");
});

var authenticated = false;
var username = null;

app.post('/authenticate', function(req, res) {
	console.log(req.body.username);
	
	username = req.body.username;
	var index = username.indexOf("@");
	console.log(index);
	username = username.substring(0, index);
	
	console.log("Username:", username);
	
	mref.authWithPassword({
  	email    : req.body.username,
  	password : req.body.password
	}, function(error, authData) {
		if (error) {
			console.log("Login Failed!", error);
			res.send("");
		} else {
			console.log("Authenticated successfully with payload:", authData);
			res.send(username);
			authenticated = true;
			auth();
		}
	});
	
});

function auth() {
	if (authenticated === true) {
		console.log("Correct Authentication");
		console.log("The username to be used is:", username);
		
		var url = 'https://translation-nation.firebaseio.com/scores/' + username;
		console.log(url);
		
		var ref = new Firebase('https://translation-nation.firebaseio.com/scores/');
		
		new Firebase(url).once('value', function(snap) {
   		console.log('I fetched a user!', snap.val());
			
			if (snap.val() === null) {
				console.log("user didn't exist in firebase, but now he will!");
				
				var usersRef = ref.child(username);
				usersRef.set({
					"highscore": 0
				});
			}
		});
	} else {
		console.log("Failed Authentication");
	}
}

app.post('/signup', function(req, res) {
	console.log("signup: " + req.body.username);
	
	mref.createUser({
  		email    : req.body.username,
  		password : req.body.password}, function(error, userData) {
  		if (error) {
    		console.log("Error creating user:", error);
			res.send("failure");
  		} else {
    		console.log("Successfully created user account with uid:", userData.uid);
			res.send("success");
		}
	});
});

app.post('/forgotpwd', function(req, res) {
	mref.resetPassword({
  		email : req.body.username
	}, function(error) {
		if (error === null) {
			console.log("Password reset email sent successfully");
			res.send("failure");
		} else {
			console.log("Error sending password reset email:", error);
			res.send("success");
		}
	});
});

app.post('/getscore', function(req, res) {
	console.log('It comes here!');
	console.log('This is the user', req.body.username);
	var url = 'https://translation-nation.firebaseio.com/scores/' + req.body.username;
	console.log(url);

	var ref = new Firebase('https://translation-nation.firebaseio.com/scores/');

	var score = "-1";
	
	if (req.body.username !== null) {
		new Firebase(url).once('value', function(snap) {
			console.log('I fetched a user!', snap.val());
			if (typeof snap.val() === 'object') {
				console.log('It is an object!');
				console.log(snap.val().highscore);
				score = snap.val().highscore.toString();
				console.log("String score:", score);
				res.send(score);
			} else {
				console.log('It\'s not an object!');
			}
		});
	} else {
		console.log("Came here!");
	}
	
	console.log("The high score is:", score);
});

app.post('/generaterandom', function(req, res) {
	console.log('It comes here!');
	console.log('The request is:', req);
	var word = randomWords();
	res.send(req.body.languageTo);
});

//module.exports = app;