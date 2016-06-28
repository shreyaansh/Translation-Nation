/*eslint-env browser */
/*globals xhr:true responsiveVoice*/


var lang = "es";
var flag = 0;

function enter() {
	document.getElementById('translateFrom').onkeypress = function(e) {
		if (!e) e = window.Event;
		var keyCode = e.keyCode || e.which;
		if (keyCode == '13') {
			myFunction();
			return false;
		}
	}
}

function myFunction() {
	
	var in1 = 0;
	var langfr = "en";
	
	if (document.getElementById("option2").checked) {
		console.log(document.getElementById("option2").value);
		lang = document.getElementById("option2").value;
		in1 = 1;
		console.log(in1);
		flag=1;

	} 
	else if (document.getElementById("option3").checked) {
		console.log(document.getElementById("option3").value);
		lang = document.getElementById("option3").value;
		in1 = 1;
		flag = 2;
		console.log(in1);
	}
	 else if (document.getElementById("option4").checked) {
		console.log(document.getElementById("option4").value);
		lang = document.getElementById("option4").value;
		in1 = 1;
		flag=3;
		console.log(in1);
	}
	else {
		console.log(document.getElementById("option1").value);
		lang = document.getElementById("option1").value;
		in1 = 1;
		flag = 4;
		console.log(in1);
	}

	if(in1) {
		if (document.getElementById("option6").checked) {
			console.log(document.getElementById("option6").value);
			langfr = document.getElementById("option6").value;
			console.log(langfr);

		} else if(document.getElementById("option7").checked) {
		console.log(document.getElementById("option7").value);
		langfr = document.getElementById("option7").value;
		console.log(langfr);
		} else if (document.getElementById("option8").checked) {
			console.log(document.getElementById("option8").value);
			langfr = document.getElementById("option8").value;
			console.log(langfr);
		} else {
			console.log(document.getElementById("option5").value);
			langfr = document.getElementById("option5").value;
			console.log(langfr);
		}
	}

	xhr = new XMLHttpRequest();
	//var url = "http://localhost:6002/translate";
	var url= "http://translation-nation.mybluemix.net/translate";
	//console.log(url);
	//var url = "http://localhost:6002/";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener("readystatechange", function () {
  		if (this.readyState === 4) {
    		console.log(this.responseText);
			document.getElementById("translateTo").innerHTML = this.responseText;
  	}
	});
	var data1 = JSON.stringify({"message":document.getElementById("translateFrom").value, "langfrom":langfr,"language":lang});
	console.log(data1);
	//var data = JSON.stringify({"message":document.getElementById("translateFrom").value, "language":lang});
	//console.log(data);
	xhr.send(data1);
}

function myFunction2() {
	if(lang === "es") {
		responsiveVoice.speak(document.getElementById("translateTo").value, "Spanish Female", {rate: 0.75});
	} else if(lang === "it") {
		responsiveVoice.speak(document.getElementById("translateTo").value, "Italian Female", {rate: 0.75});
	} else if(lang === "fr") {
		responsiveVoice.speak(document.getElementById("translateTo").value, "French Female", {rate: 0.75});
	} else {
		responsiveVoice.speak(document.getElementById("translateTo").value, "Australian Female", {rate: 1});  				
	}
}

function myFunction3() {
	var e = document.getElementById("sel1");
    var strlang = e.options[e.selectedIndex].value;
    console.log(strlang);
    if(strlang == 1) {
		responsiveVoice.speak(document.getElementById("translateTo").value, "Welsh Male", {rate: 0.75});
    } else if(strlang == 2) {
		responsiveVoice.speak(document.getElementById("translateTo").value, "Deutsch Female", {rate: 0.75});
	} else if(strlang == 3) {
		responsiveVoice.speak(document.getElementById("translateTo").value, "Russian Female", {rate: 0.75});
	} else if(strlang == 4) {
		responsiveVoice.speak(document.getElementById("translateTo").value, "Thai Female", {rate: 0.75});
	} else if(strlang == 5) {
		responsiveVoice.speak(document.getElementById("translateTo").value, "US English Female", {rate: 0.75});
	} else if(strlang == 6) {
		responsiveVoice.speak(document.getElementById("translateTo").value, "UK English Female", {rate: 0.75});
	} else if(strlang == 7) {
		responsiveVoice.speak(document.getElementById("translateTo").value, "French Female", {rate: 0.75});
	} else if(strlang == 8) {
		responsiveVoice.speak(document.getElementById("translateTo").value, "Australian Female", {rate: 0.75});
	} else if(strlang == 9) {
		responsiveVoice.speak(document.getElementById("translateTo").value, "Spanish Female", {rate: 0.75});
	} else if(strlang == 10) {
			responsiveVoice.speak(document.getElementById("translateTo").value, "Italian Female", {rate: 0.75});
	} else if(strlang == 11) {
		responsiveVoice.speak(document.getElementById("translateTo").value, "Hindi Female", {rate: 0.75});
	} else if(strlang == 12) {
		responsiveVoice.speak(document.getElementById("translateTo").value, "Romanian Male", {rate: 0.75});
	} else if(strlang == 13) {
		responsiveVoice.speak(document.getElementById("translateTo").value, "Arabic Male", {rate: 0.75});
	} else if(strlang == 14) {
		responsiveVoice.speak(document.getElementById("translateTo").value, "Tamil Male", {rate: 0.75});
	} else if(strlang == 15) {
		responsiveVoice.speak(document.getElementById("translateTo").value, "Turkish Female", {rate: 0.75});
	} else if(strlang == 16) {
		responsiveVoice.speak(document.getElementById("translateTo").value, "Greek Female", {rate: 0.75});
	} else if(strlang == 17) {
		responsiveVoice.speak(document.getElementById("translateTo").value, "Norwegian Female", {rate: 0.75});
	} else if(strlang == 18) {
		responsiveVoice.speak(document.getElementById("translateTo").value, "Japanese Female", {rate: 0.75});
        }
    else if(strlang == 19) {
		responsiveVoice.speak(document.getElementById("translateTo").value, "Korean Female", {rate: 0.75});
	} else if(strlang == 20) {
		responsiveVoice.speak(document.getElementById("translateTo").value, "Chinese Female", {rate: 0.75});
	}
}

function setUser() {
	var username = localStorage.getItem('username');
	console.log(username);
	document.getElementById('user').innerHTML = '<a href="#"><span class="glyphicon glyphicon-user"></span> ' + username + '</a>';
}