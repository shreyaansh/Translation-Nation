/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();


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

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
