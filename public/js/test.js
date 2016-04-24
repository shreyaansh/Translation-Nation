function myFunction() {
	//document.getElementById("translateTo").value = document.getElementById("translateFrom").value;

	//var url = "http://localhost:6002/hello";
	/*var text = '{ "message":"' + document.getElementById(translateFrom) + '" }';
	//var obj = JSON.parse(text);
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "plain/text");
	var data = JSON.stringify({"email":"hey@mail.com","password":"101010"});
	xhr.send("data");*/
	var lang = "es";
	
	if (document.getElementById("option2").checked) {
		console.log(document.getElementById("option2").value);
		lang = document.getElementById("option2").value;
	} else if (document.getElementById("option3").checked) {
		console.log(document.getElementById("option3").value);
		lang = document.getElementById("option3").value;
	} else {
		console.log(document.getElementById("option1").value);
		lang = document.getElementById("option1").value;
	}
		
	xhr = new XMLHttpRequest();
	var url = "http://localhost:6002/hello";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener("readystatechange", function () {
  		if (this.readyState === 4) {
    		console.log(this.responseText);
			document.getElementById("translateTo").value = this.responseText;
  		}
	});
	var data = JSON.stringify({"message":document.getElementById("translateFrom").value, "language":lang});
	console.log(data);
	xhr.send(data);
}