/*eslint-env browser */
/*globals xhr:true responsiveVoice*/


var lang = "es";
var flag = 0;

function myFunction() {

	var in1 = 0;
	var langfr = "en";

	myFunction3();
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
		responsiveVoice.speak(document.getElementById("translateFrom").value, "Welsh Male", {rate: 0.75});
    } else if(strlang == 2) {
		responsiveVoice.speak(document.getElementById("translateFrom").value, "Deutsch Female", {rate: 0.75});
	} else if(strlang == 3) {
		responsiveVoice.speak(document.getElementById("translateFrom").value, "Russian Female", {rate: 0.75});
	} else if(strlang == 4) {
		responsiveVoice.speak(document.getElementById("translateFrom").value, "Thai Female", {rate: 0.75});
	} else if(strlang == 5) {
		responsiveVoice.speak(document.getElementById("translateFrom").value, "US English Female", {rate: 0.75});
	} else if(strlang == 6) {
		responsiveVoice.speak(document.getElementById("translateFrom").value, "UK English Female", {rate: 0.75});
	} else if(strlang == 7) {
		responsiveVoice.speak(document.getElementById("translateFrom").value, "French Female", {rate: 0.75});
	} else if(strlang == 8) {
		responsiveVoice.speak(document.getElementById("translateFrom").value, "Australian Female", {rate: 0.75});
	} else if(strlang == 9) {
		responsiveVoice.speak(document.getElementById("translateFrom").value, "Spanish Female", {rate: 0.75});
	} else if(strlang == 10) {
			responsiveVoice.speak(document.getElementById("translateFrom").value, "Italian Female", {rate: 0.75});
	} else if(strlang == 11) {
		responsiveVoice.speak(document.getElementById("translateFrom").value, "Hindi Female", {rate: 0.75});
	} else if(strlang == 12) {
		responsiveVoice.speak(document.getElementById("translateFrom").value, "Romanian Male", {rate: 0.75});
	} else if(strlang == 13) {
		responsiveVoice.speak(document.getElementById("translateFrom").value, "Arabic Male", {rate: 0.75});
	} else if(strlang == 14) {
		responsiveVoice.speak(document.getElementById("translateFrom").value, "Tamil Male", {rate: 0.75});
	} else if(strlang == 15) {
		responsiveVoice.speak(document.getElementById("translateFrom").value, "Turkish Female", {rate: 0.75});
	} else if(strlang == 16) {
		responsiveVoice.speak(document.getElementById("translateFrom").value, "Greek Female", {rate: 0.75});
	} else if(strlang == 17) {
		responsiveVoice.speak(document.getElementById("translateFrom").value, "Norwegian Female", {rate: 0.75});
	} else if(strlang == 18) {
		responsiveVoice.speak(document.getElementById("translateFrom").value, "Japanese Female", {rate: 0.75});
        }
    else if(strlang == 19) {
		responsiveVoice.speak(document.getElementById("translateFrom").value, "Korean Female", {rate: 0.75});
	} else if(strlang == 20) {
		responsiveVoice.speak(document.getElementById("translateFrom").value, "Chinese Female", {rate: 0.75});
	}
}

function hello() {
	var username = localStorage.getItem('username');
	console.log(username);
	document.getElementById('user').innerHTML = '<a href="#"><span class="glyphicon glyphicon-user"></span> ' + username + '</a>';
}