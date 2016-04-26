/*eslint-env browser */
/*globals toastr */

var get;
var score;
var language = 'es';

//function myFunction() {
	//document.getElementById("game").innerHTML = "Hello";
//}

function bodyLoad() {
	//Select the language first
	selectLanguage();
	//Call init to get the scores of the user
	//init();
	
	//Call randomize to get the word adn show it in spanish or whatever language is selected.
	//updateWord();
}

function selectLanguage() {
	console.log("It comes here!");
	if (document.getElementById('es').checked) {
		language = 'es';
		console.log('es checked');
	} else if (document.getElementById('fr').checked) {
		language = 'fr';
		console.log('fr checked');
	} else if (document.getElementById('it').checked) {
		language = 'it';
		console.log('it checked');
	}
}

//function updateWord() {
//	
//}

function init() {
	//Get the username from the previous page using session storage
	get = localStorage.getItem('username');
	
	score = -1;
	//Have to do a firebase request to get the scores:
	var data = JSON.stringify({"username": get});

	var xhr = new XMLHttpRequest();
	xhr.addEventListener("readystatechange", function () {
  		if (this.readyState === 4) {
    		console.log(this.responseText);
			if (this.responseText) {
				toastr.success('Got the scores');
				score = this.responseText;
				console.log(score);
				console.log(typeof this.responseText);
				console.log("score got", this.responseText);
				initScores();
			} else {
				toastr.error('Couldn\'t get the scores');
			}
  		}
	});

	xhr.open("POST", "http://translation-nation.mybluemix.net/getscore");
	xhr.setRequestHeader("content-type", "application/json");

	xhr.send(data);
}

function initScores() {
	document.getElementById("game").innerHTML = "User is: " + get + " <br> " + "Highscore for the user is: " + score;
	
	document.getElementById("currentScore").innerHTML = "Current score is: 0";
}