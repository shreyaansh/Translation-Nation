/*eslint-env node, browser*/
/*globals toastr */
function authenticate() {
	console.log("It comes here!");
	var data = JSON.stringify({"username": document.getElementById("usr").value, "password": document.getElementById("pwd").value});

	var xhr = new XMLHttpRequest();
	xhr.addEventListener("readystatechange", function () {
  		if (this.readyState === 4) {
    		console.log(this.responseText);
			if (this.responseText === "") {
				//toastr.success('Signed In!');
				toastr.error('Could Sign in. Incorrect Email or Password');
			} else {
				//toastr.error('Could Sign in. Incorrect Email or Password');
				toastr.success('Signed In!');
				localStorage.setItem('username', this.responseText);
			}
  		}
	});

	xhr.open("POST", "http://translation-nation.mybluemix.net/authenticate");
	xhr.setRequestHeader("content-type", "application/json");

	xhr.send(data);
}

function signUp() {
	//console.log("It comes here!");
	var data = JSON.stringify({"username": document.getElementById("usr").value, "password": document.getElementById("pwd").value});
	var xhr = new XMLHttpRequest();

	xhr.addEventListener("readystatechange", function () {
  		if (this.readyState === 4) {
			console.log(this.responseText);
			if (this.responseText === "success")
				toastr.success('Successfully signed up! Click on the Log In button to continue');
			else
				toastr.error('Couldn\'t Sign Up. Error!')
  		}
	});

	xhr.open("POST", "http://translation-nation.mybluemix.net/signup");
	xhr.setRequestHeader("content-type", "application/json");

	xhr.send(data);
}

function forgot() {
	console.log("It comes here!");
	var data = JSON.stringify({"username": document.getElementById("usr").value, "password": document.getElementById("pwd").value});

	var xhr = new XMLHttpRequest();
	xhr.addEventListener("readystatechange", function () {
  		if (this.readyState === 4) {
			console.log(this.responseText);
			if (this.responseText === 'success')
				toastr.success('Email sent! Check inbox for link');
			else
				toastr.error('Could\'t send email! Enter email and try again');
  		}
	});

	xhr.open("POST", "http://translation-nation.mybluemix.net/forgotpwd");
	xhr.setRequestHeader("content-type", "application/json");

	xhr.send(data);
}

function sex() {
	localStorage('username', 'help');
}