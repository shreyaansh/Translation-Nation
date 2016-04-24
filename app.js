var express = require('express');
var cfenv = require('cfenv');
var app = express();
app.use(express.static(__dirname + '/public'));
var appEnv = cfenv.getAppEnv();

<<<<<<< HEAD
var routes = require('./routes');
var http = require('http');
var path = require('path');
var auth = require('basic-auth');
=======

var pool = mysql.createConnection({
connectionLimit: 10,
host : 'us-cdbr-iron-east-03.cleardb.net',
user : 'ba899d1ab08143',
password : '799c47af',
database : 'ad_54ae5c5533bec9b'	
});

pool.connect();

app.get('/', function(req,res) {
	
	pool.query('SELECT * FROM ad_54ae5c5533bec9b.userpassscore',function(err,rows){
		 if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
		
		});
		var resp = req.url;
	res.send("Got a get request from server");
	
});


// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
>>>>>>> origin/master

app.get('api/simplemessage', routes.simplemessage(pool));

app.listen(appEnv.port, '0.0.0.0', function() {
  	console.log("server starting on " + appEnv.url);
	
	console.log("Hello Boiz!!! Printed on Screen");
});
