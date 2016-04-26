/*eslint-env browser */
/*globals toastr */
function myFunction() {
	document.getElementById("game").innerHTML = "Hello";
	/*var lang = "es";
	var in1 = 0;
	var langfr = "en";
	
	if (document.getElementById("option2").checked) {
		console.log(document.getElementById("option2").value);
		lang = document.getElementById("option2").value;
		in1 = 1;
		console.log(in1);

	} 
	else if (document.getElementById("option3").checked) {
		console.log(document.getElementById("option3").value);
		lang = document.getElementById("option3").value;
		in1 = 1;
		console.log(in1);
	}
	 else if (document.getElementById("option4").checked) {
		console.log(document.getElementById("option4").value);
		lang = document.getElementById("option4").value;
		in1 = 1;
		console.log(in1);
	}
	else {
		console.log(document.getElementById("option1").value);
		lang = document.getElementById("option1").value;
		in1 = 1;
		console.log(in1);
	}

	if(in1)
	{
	if (document.getElementById("option6").checked) {
		console.log(document.getElementById("option6").value);
		langfr = document.getElementById("option6").value;
		console.log(langfr);

	}
	else if(document.getElementById("option7").checked)
	{
		console.log(document.getElementById("option7").value);
		langfr = document.getElementById("option7").value;
		console.log(langfr);

	}
	else if (document.getElementById("option8").checked) {
		console.log(document.getElementById("option8").value);
		langfr = document.getElementById("option8").value;
		console.log(langfr);

	}
	else
	{
		console.log(document.getElementById("option5").value);
		langfr = document.getElementById("option5").value;
		console.log(langfr);
	
	}
}

	xhr = new XMLHttpRequest();
	var url = "http://localhost:6002/translate";
	//var url= "http://translation-nation.mybluemix.net/translate";
	console.log(url);	//var url = "http://localhost:6002/hello";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener("readystatechange", function () {
  		if (this.readyState === 4) {
    		console.log(this.responseText);
			document.getElementById("translateTo").value = this.responseText;
			responsiveVoice.speak(document.getElementById("translateTo").value, "UK English Female", {rate: 1});
  		}
	});
	var data1 = JSON.stringify({"message":document.getElementById("translateFrom").value, "langfrom":langfr,"language":lang});
	console.log(data1);
	var data = JSON.stringify({"message":document.getElementById("translateFrom").value, "language":lang});
	console.log(data);
	xhr.send(data1);*/
}

function bodyLoad() {
	//Get the username from the previous page using session storage
	//sessionStorage.setItem('user', 'help');
	var get = localStorage.getItem('username');
	//var get = ;
	
	var score = -1;
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